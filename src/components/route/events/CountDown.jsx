import React, { useState, useEffect } from "react";

export default function CountDown() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2023-12-28") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        mins: Math.floor((difference / (1000 * 60)) % 60),
        secs: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = Object.keys(timeLeft).map((interval, index) => {
    if (!timeLeft[interval]) return null;

    const separator = index !== Object.keys(timeLeft).length - 1 ? " : " : "";

    return (
      <span className="text-white text-2xl ml-2 " key={interval}>
        <div>
          {timeLeft[interval]}
          <span className=" mx-4 text-gray-400">{separator}</span>
        </div>
        <div className="text-xs text-gray-400">{interval}</div>
      </span>
    );
  });

  return (
    <div className="flex bg-black bg-opacity-75 w-fit mx-auto pl-4 py-4 rounded-md">
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span className="text-red-500 text-2xl">Time's up!</span>
      )}
    </div>
  );
}
