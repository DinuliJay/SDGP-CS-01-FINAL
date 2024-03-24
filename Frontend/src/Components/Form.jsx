import React, { useState } from "react";
import { Link } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";
import AdditionalNav from "./AdditionalNav";
import QuestionSelector from "./Webcam/Components/questions";
import { useJobRole } from "./JobRoleProvider";
import { useContext } from "react";

const questions = [
  "Enter your full name. ",
  "Mention your Academic Background.",
  "Mention your soft skills.",
  "Mention your Academic Achievements.",
];
const options = [
  "Software Engineering",
  "Front-end Web Development",
  "DevOps Engineer",
  "Backend Developer",
  "UI/UX Designer",
  "Quality Assurance Engineer",
  "Data Scientist"
];

const Form = () => {
  const { selectedJobRole, setSelectedJobRole } = useJobRole();
  const [answers, setAnswers] = useState(new Array(questions.length).fill(""));
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [submittedData, setSubmittedData] = useState(null);
  const navigate = useNavigate();

  const handleChange = (event, index) => {
    const newAnswers = [...answers];
    newAnswers[index] = event.target.value;
    setAnswers(newAnswers);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Answers:", answers);
    console.log("Selected option:", selectedOption);

    setSelectedJobRole(selectedOption);

    setSubmittedData({ answers, selectedOption });

    event.preventDefault();

    const pageMap = {
      SoftwareEngineer: "/",
      FrontEndDeveloper: "/",
    };

    setSubmittedData({ answers, selectedOption });

    // Navigate to the webcam route
    navigate("/webcam", { state: { selectedJobRole: selectedOption } });
  };

  return (
    <div>
      <div id="quiz">
        <form onSubmit={handleSubmit}>
          <div className="f_container">
            <h2>Quiz</h2>
            <div className="header">
              {questions.map((question, index) => (
                <div key={index}>
                  <label htmlFor={`question-${index}`}>{question}</label>
                  <input
                    id={`question-${index}`}
                    type="text"
                    value={answers[index]}
                    onChange={(event) => handleChange(event, index)}
                  />
                </div>
              ))}
              <label htmlFor="dropdown">Select a preferred job role:</label>
              <select
                id="dropdown"
                value={selectedOption}
                onChange={handleOptionChange}
              >
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <button type="submit" value="Submit">
                <Link to="/webcam">
                  <a>Submit</a>
                </Link>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
