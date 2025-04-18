import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import jsPDF from "jspdf";
import "./App.css";

function PaperEditorPage() {
  const location = useLocation();
  const [editorText, setEditorText] = useState(location.state?.paper || "");

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.text(editorText, 10, 20);
    doc.save("Question_Paper.pdf");
  };

  return (
    <div className="main-page">
      <div className="hero-section">
        <h1>📄 Edit Your Question Paper</h1>
        <p>Modify the paper and download it as a PDF!</p>
      </div>

      <textarea
        value={editorText}
        onChange={(e) => setEditorText(e.target.value)}
        rows="20"
        className="editor-textarea"
      ></textarea>

      <button onClick={handleDownload} className="generate-button">
        Download PDF
      </button>

      <footer>© 2025 AI Paper Generator | Prajwal</footer>
    </div>
  );
}

export default PaperEditorPage;
