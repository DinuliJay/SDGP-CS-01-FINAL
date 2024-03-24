import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { FaMicrophoneAlt , FaMicrophoneAltSlash , FaRedo} from "react-icons/fa"; // Import individual icons from the Fa package
import 'regenerator-runtime/runtime';
import './webcam.css'


function SpeechRecognitionComponent() {
  const [listening, setListening] = useState(false);
  const { transcript, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  useEffect(() => {
    if (!browserSupportsSpeechRecognition) {
      console.log("Speech recognition not supported in this browser.");
    }
  }, [browserSupportsSpeechRecognition]);

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true });
    setListening(true);
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
    setListening(false);
  };

  return (
    <div className='speech-container'>
      <p>Microphone: {listening ? 'ON' : 'OFF'}</p>
      <div className='button-names'>
        <button id = "mic-btn" onClick={startListening} disabled={listening}><FaMicrophoneAlt size={20} />Start</button>
        <button id = "mic-btn" onClick={stopListening} disabled={!listening}><FaMicrophoneAltSlash size={20}/>Stop</button>
        <button id = "mic-btn" onClick={resetTranscript}><FaRedo size={20} />Reset</button>
      </div>
      <p>{transcript}</p>
    </div>
  );
}

export default SpeechRecognitionComponent;
