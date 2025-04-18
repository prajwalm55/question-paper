import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function QuestionPaperGenerator() {
  const [formData, setFormData] = useState({
    class: "",
    subject: "",
    level: "",
    marks: "",
  });

  const [generated, setGenerated] = useState(false);
  const navigate = useNavigate();

  const handleSelect = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const isFormComplete = () => {
    return (
      formData.class &&
      formData.subject &&
      formData.level &&
      formData.marks
    );
  };

  const handleGenerate = async () => {
    if (!isFormComplete()) return;
    setGenerated(false);

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      // Navigate to editor page and pass paper content via state
      navigate("/editor", { state: { paper: data.paper } });

    } catch (error) {
      console.error("API error:", error);
    }
  };

  return (
    <div className="main-page">
      <div className="hero-section">
        <h1>📝 AI Question Paper Generator</h1>
        <p>
          Select your options below, generate your paper, and edit it on the next page!
        </p>
      </div>

      <div className="card-section">
        <div className="form-container">
          <h2>Choose Options</h2>

          <div className="form-group">
            <label>Class</label>
            <div className="button-group">
              {["Class 6", "Class 7", "Class 8", "Class 9", "Class 10"].map((cls) => (
                <button
                  key={cls}
                  className={`option-button ${
                    formData.class === cls ? "selected" : ""
                  }`}
                  onClick={() => handleSelect("class", cls)}
                >
                  {cls}
                </button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Subject</label>
            <div className="button-group">
              {["Math", "Science", "English", "History"].map((subj) => (
                <button
                  key={subj}
                  className={`option-button ${
                    formData.subject === subj ? "selected" : ""
                  }`}
                  onClick={() => handleSelect("subject", subj)}
                >
                  {subj}
                </button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Difficulty Level</label>
            <div className="button-group">
              {["Easy", "Medium", "Hard"].map((level) => (
                <button
                  key={level}
                  className={`option-button ${
                    formData.level === level ? "selected" : ""
                  }`}
                  onClick={() => handleSelect("level", level)}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Total Marks</label>
            <div className="button-group">
              {["25", "40", "50", "100"].map((marks) => (
                <button
                  key={marks}
                  className={`option-button ${
                    formData.marks === marks ? "selected" : ""
                  }`}
                  onClick={() => handleSelect("marks", marks)}
                >
                  {marks}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={!isFormComplete()}
            className={`generate-button ${!isFormComplete() ? "disabled-button" : ""}`}
          >
            Generate Paper
          </button>

          {generated && (
            <div className="success-message">✅ Paper Generated Successfully!</div>
          )}
        </div>
      </div>

      <footer>© 2025 AI Paper Generator | Prajwal</footer>
    </div>
  );
}

export default QuestionPaperGenerator;
