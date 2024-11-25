import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchQuestionsWithOptions } from "../services/questionService";
import Questions from "./Questions";
import Timer from "./Timer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Quiz = ({ onComplete }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [timer, setTimer] = useState(30);
  const [canSelect, setCanSelect] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loadQuestions = async () => {
      const data = await fetchQuestionsWithOptions();
      setQuestions(data);
    };

    loadQuestions();
  }, []);

  const saveAnswer = () => {
    const currentQuestion = questions[currentQuestionIndex];
    setAnswers((prev) => [
      ...prev,
      {
        question: currentQuestion.question,
        selectedOption,
        correctAnswer: currentQuestion.correctAnswer,
      },
    ]);
    setSelectedOption(null);
    toast.success("Your answer has been saved!");
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setTimer(30);
      setCanSelect(false);
    } else {
      toast.success("Test completed!");
      onComplete(answers);
      navigate("/result");
    }
  };

  const handleTimeUp = () => {
    saveAnswer();
    goToNextQuestion();
  };

  if (questions.length === 0) return <div>Loading...</div>;

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Timer
        timer={timer}
        setTimer={setTimer}
        setCanSelect={setCanSelect}
        onTimeUp={handleTimeUp}
      />
      <Questions
        currentQuestion={currentQuestion}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        canSelect={canSelect}
        questionIndex={currentQuestionIndex}
        totalQuestions={questions.length}
      />
      <div className="mt-6 w-full max-w-2xl">
        <button
          onClick={handleTimeUp}
          disabled={!canSelect}
          className="w-full py-4 bg-gray-700 text-white font-bold rounded-lg hover:bg-gray-800 transition transform hover:scale-105"
        >
          İleri
        </button>
      </div>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default Quiz;
