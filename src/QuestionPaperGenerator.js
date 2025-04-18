import React, { useState } from "react";
import "./App.css";

function QuestionPaperGenerator() {
  const [formData, setFormData] = useState({
    class: "",
    subject: "",
    level: "",
    marks: "",
  });

  const [generated, setGenerated] = useState(false);

  const handleSelect = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setGenerated(false);
  };

  const isFormComplete = () => {
    return (
      formData.class &&
      formData.subject &&
      formData.level &&
      formData.marks
    );
  };

  const handleGenerate = () => {
    setGenerated(true);
  };

  const renderButtonGroup = (field, options) => (
    <div className="button-group">
      {options.map((option) => (
        <button
          key={option}
          className={`option-button ${formData[field] === option ? "selected" : ""}`}
          onClick={() => handleSelect(field, option)}
        >
          {option}
        </button>
      ))}
    </div>
  );

  return (
    <div className="form-container">
      <h2>Select Options</h2>

      <div className="form-group">
        <label>Class</label>
        {renderButtonGroup("class", ["10", "11", "12"])}
      </div>

      <div className="form-group">
        <label>Subject</label>
        {renderButtonGroup("subject", ["Mathematics", "Science", "English"])}
      </div>

      <div className="form-group">
        <label>Difficulty</label>
        {renderButtonGroup("level", ["Easy", "Medium", "Hard"])}
      </div>

      <div className="form-group">
        <label>Marks</label>
        {renderButtonGroup("marks", ["25", "40", "50", "100"])}
      </div>

      <button
        onClick={handleGenerate}
        disabled={!isFormComplete()}
        className={`generate-button ${!isFormComplete() ? "disabled-button" : ""}`}
      >
        Generate Paper
      </button>

      {generated && (
        <div className="success-message">
          🎉 Your AI question paper is ready!
        </div>
      )}
    </div>
  );
}

export default QuestionPaperGenerator;
