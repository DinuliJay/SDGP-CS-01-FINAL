from flask import Flask, render_template, Response, jsonify
from flask_cors import CORS
from flask_restful import Api, Resource
import mysql.connector
import cv2
import mediapipe as mp
import numpy as np
from collections import Counter
import pandas as pd
import pickle
import json

app = Flask(__name__)
CORS(app)
api = Api(app)

# Configure MySQL connection
mysql_connection = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="ace"
)

# Initialize variables for emotion counting and feedback
emotions = []
previous_emotion = None  # Keep track of emotions written to file

# Load the trained machine learning model
with open('body_language.pkl', 'rb') as f:
    model = pickle.load(f)

# Initialize MediaPipe
mp_drawing = mp.solutions.drawing_utils
mp_holistic = mp.solutions.holistic

# Open the JSON file for writing feedback
feedback_file = open("feedback.json", "w")


# Function to provide feedback based on the most repeated emotion
def provide_feedback(most_repeated_emotion):
    if most_repeated_emotion == 'Pleasant':
        feedback = "Brilliant! You were maintaining a pleasant expression Throughout the Interview"
    elif most_repeated_emotion == 'Nervous':
        feedback = ("Oops! Facing an interview with a Nervous face would leave a bad impression. Make sure to be "
                    "pleasant")
    elif most_repeated_emotion == 'Neutral':
        feedback = "You've been maintaining a Neutral expression, It'll be good to be more expressive!"
    else:
        feedback = "You've shown {most_repeated_emotion} the most. How do you feel about that?"
    return feedback


# Video streaming generator
def gen_frames():
    cap = cv2.VideoCapture(0)
    with mp_holistic.Holistic(min_detection_confidence=0.5, min_tracking_confidence=0.5) as holistic:
        global previous_emotion  # Declare previous_emotion as global here
        while True:
            ret, frame = cap.read()
            if not ret:
                break

            # Process frame with MediaPipe
            image = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
            image.flags.writeable = False
            results = holistic.process(image)
            image.flags.writeable = True
            image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)

            # Extract the detected class
            try:
                # Extract Pose Landmarks
                pose = results.pose_landmarks.landmark
                pose_row = list(
                    np.array(
                        [[landmark.x, landmark.y, landmark.z, landmark.visibility] for landmark in pose]).flatten())

                # Extract Face Landmarks
                face = results.face_landmarks.landmark
                face_row = list(
                    np.array(
                        [[landmark.x, landmark.y, landmark.z, landmark.visibility] for landmark in face]).flatten())

                row = pose_row + face_row

                # Classify the detected emotion
                x = pd.DataFrame([row])
                body_language_class = model.predict(x)[0]
                emotions.append(body_language_class)

                # Provide feedback based on the detected emotion
                most_repeated_emotion = Counter(emotions).most_common(1)[0][0]
                feedback = provide_feedback(most_repeated_emotion)

                # Print feedback for debugging (temporary)
                print("Generated Feedback:", feedback)

                if most_repeated_emotion != previous_emotion:
                    feedback = provide_feedback(most_repeated_emotion)
                    feedback_dict = {"emotion": most_repeated_emotion, "feedback": feedback}
                    feedback_file.write(json.dumps(feedback_dict) + "\n")  # Write feedback to JSON file
                    feedback_file.flush()  # Flush to ensure data is written immediately
                    previous_emotion = most_repeated_emotion

            except Exception as e:
                print("Error:", e)

                # Draw landmarks on frame
                mp_drawing.draw_landmarks(image, results.face_landmarks, mp_holistic.FACEMESH_CONTOURS)
                mp_drawing.draw_landmarks(image, results.pose_landmarks, mp_holistic.POSE_CONNECTIONS)

            ret, buffer = cv2.imencode('.jpg', image)
            frame = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

            # Check for quit command
            if cv2.waitKey(1) & 0xFF == ord('q'):
                break

    # Close the JSON file and release the video capture
    feedback_file.close()
    cap.release()


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/video_feed')
def video_feed():
    return Response(gen_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')


@app.route('/api/feedback')
def get_feedback():
    try:
        feedback_list = []
        with open('feedback.json', 'r') as file_obj:
            for line in file_obj:
                feedback_list.append(json.loads(line))
        return jsonify(feedback_list)
    except Exception as e:
        return jsonify({'error': str(e)}), 500


class ApiHandler(Resource):
    def get(self):
        try:
            # Execute the MySQL query
            cursor = mysql_connection.cursor()
            cursor.execute("SELECT `ID`, `Job Role`, `Questions`, `Answers` FROM ace")
            rows = cursor.fetchall()
            cursor.close()

            # Format the result
            results = []
            for row in rows:
                results.append({
                    'id': row[0],
                    'Job Role': row[1],
                    'Question': row[2],
                    'Answer': row[3],
                })

            return {
                'resultstatus': 'SUCCESS',
                'message': "Questions and Answers fetched successfully",
                'data': results
            }
        except Exception as e:
            return {
                'resultstatus': 'ERROR',
                'message': str(e)
            }


api.add_resource(ApiHandler, '/flask')

if __name__ == "__main__":
    app.run(debug=True)
