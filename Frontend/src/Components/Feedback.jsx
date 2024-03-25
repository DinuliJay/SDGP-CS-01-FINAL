import React from "react";
import { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { useNavigate } from "react-router-dom";
import "./Feedback.css"; 




const Feedback = () => {
    const [feedbackData, setFeedbackData] = useState([]);
    const navigate = useNavigate();
    // Fetch feedback data from the Flask backend
    useEffect(() => {
        const fetchFeedback = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/api/feedback');
                if (!response.ok) {
                    throw new Error(`Failed to fetch feedback: ${response.statusText}`);
                }
                const data = await response.json();
                setFeedbackData(data);
            } catch (error) {
                console.error('Error fetching feedback:', error);
            }
        };

        fetchFeedback(); // Call the fetchFeedback function when the component mounts
    }, []); // Empty dependency array ensures the effect runs only once on mount


    const handleGoToHomePage = () => {
        navigate('/')
};
    return (
        <div className="feedback-container">
            <h2>Feedback</h2>
            <div>
                {feedbackData.map((feedback, index) => (
                    <div className="feedback-item" key={index}>
                        <h3>Emotion: {feedback.emotion}</h3>
                        <p>Feedback: {feedback.feedback}</p>
                    </div>
                ))}
            </div>
            <button id="home-pg-btn" onClick={handleGoToHomePage}>Go to Home Page</button>
        </div>
    );
};

export default Feedback;
