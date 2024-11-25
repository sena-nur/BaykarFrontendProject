import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Result = ({ answers }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handlePopState = () => {
      navigate("/");
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-6">Quiz Results</h1>
      <div className="w-full max-w-2xl">
        <table className="table-auto border-collapse border border-gray-300 w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-left">
                Question
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Your Answer
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Correct Answer
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Result
              </th>
            </tr>
          </thead>
          <tbody>
            {answers.map((answer, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">
                  {answer.question}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {answer.selectedOption || "No Answer"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {answer.correctAnswer}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {answer.selectedOption
                    ? answer.selectedOption === answer.correctAnswer
                      ? "Correct"
                      : "Incorrect"
                    : "No Answer"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        onClick={() => navigate("/")}
        className="mt-6 py-2 px-4 bg-gray-700 text-white font-bold rounded-lg hover:bg-gray-800 transition transform hover:scale-105"
      >
        Yeni Teste Başla
      </button>
    </div>
  );
};

export default Result;
