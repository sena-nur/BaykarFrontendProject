import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

function App() {
  const [answers, setAnswers] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/quiz" element={<Quiz onComplete={setAnswers} />} />
        <Route path="/result" element={<Result answers={answers} />} />
      </Routes>
    </Router>
  );
}

export default App;
