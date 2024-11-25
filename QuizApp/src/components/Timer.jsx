import React, { useEffect } from "react";

const Timer = ({ timer, setTimer, setCanSelect, onTimeUp }) => {
  useEffect(() => {
    if (timer === 0) {
      onTimeUp();
    } else {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
        if (timer === 20) {
          setCanSelect(true);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer, setTimer, setCanSelect, onTimeUp]);

  const progressBarWidth = (timer / 30) * 100;

  return (
    <div className="w-full bg-gray-200 rounded-full h-4 mb-6 relative">
      <div
        className="bg-gray-600 h-4 rounded-full"
        style={{ width: `${progressBarWidth}%` }}
      ></div>
      <span className="absolute inset-0 flex justify-center items-center text-white font-bold">
        {timer}s
      </span>
    </div>
  );
};

export default Timer;
