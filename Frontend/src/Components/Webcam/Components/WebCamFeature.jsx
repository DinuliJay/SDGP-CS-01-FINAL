import React,{useState} from "react";
import "./webcam.css";
import SpeechRecognitionComponent from "./speechrecognition";
import QuestionSelector from "./questions";
import WebcamComponent from "./WebcamComponent";
import './webcam.css';

function WebcamFeature() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  return (
    
    <div className="App">
      <div className="split left">
          <SpeechRecognitionComponent />
          <div className="Question-container">
          <QuestionSelector setQuestions={setQuestions} 
            setCurrentQuestion={setCurrentQuestion}  />
          </div>
       </div>
      <div className="split right">
        <WebcamComponent />
      </div>
    </div>


    
  );
}

export default WebcamFeature;
