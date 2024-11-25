import React from "react";

const Questions = ({
  currentQuestion,
  selectedOption,
  setSelectedOption,
  canSelect,
  questionIndex,
  totalQuestions,
}) => {
  const optionLabels = ["A", "B", "C", "D"];

  return (
    <div className="mb-6 p-16 bg-white shadow-2xl rounded-xl max-w-2xl w-full mx-4 border-2 border-gray-300 hover:border-gray-500 transition">
      <h2 className="text-xl font-bold mb-4">
        Question {questionIndex + 1} of {totalQuestions}
      </h2>
      <p className="mb-4">{currentQuestion.question}</p>
      <ul className="list-none">
        {currentQuestion.options.map((option, i) => (
          <li key={i} className="mb-2 flex items-center">
            <span className="mr-2">{optionLabels[i]}.</span>
            <button
              disabled={!canSelect}
              onClick={() => setSelectedOption(option)}
              className={`flex-1 py-2 px-4 border rounded ${
                selectedOption === option
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200"
              }`}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Questions;
