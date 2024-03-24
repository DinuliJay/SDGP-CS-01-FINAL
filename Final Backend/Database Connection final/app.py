from flask import Flask, request
from flask_restful import Api, Resource
from flask_cors import CORS
import mysql.connector

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


if __name__ == '__main__':
    app.run(debug=True, port=5001)

