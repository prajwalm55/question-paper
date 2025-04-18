import React from "react";
import QuestionPaperGenerator from "./QuestionPaperGenerator";
import "./App.css";

function App() {
  return (
    <div className="main-page">
      <header className="hero-section">
        <h1>AI Question Paper Generator</h1>
        <p>Create customized, AI-generated question papers in seconds!</p>
      </header>

      <div className="card-section">
        <QuestionPaperGenerator />
      </div>

      <footer>
        <p>&copy; 2025 Prajwal AI Labs</p>
      </footer>
    </div>
  );
}

export default App;
