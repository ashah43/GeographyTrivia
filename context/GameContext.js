import React, { createContext, useState } from 'react';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [highestStreak, setHighestStreak] = useState(0);
  const [currentStreak, setCurrentStreak] = useState(0);

  const incrementCorrectAnswers = () => {
    setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
    setCurrentStreak((prevCurrentStreak) => {
      const newStreak = prevCurrentStreak + 1;
      // Update the highest streak if the new current streak is greater
      setHighestStreak((prevHighestStreak) => Math.max(prevHighestStreak, newStreak));
      return newStreak;
    });
  };

  const incrementTotalQuestions = () => {
    setTotalQuestions((prevTotalQuestions) => prevTotalQuestions + 1);
  };

  const resetStreak = () => {
    setCurrentStreak(0);
  };

  const resetGameStats = () => {
    setCorrectAnswers(0);
    setTotalQuestions(0);
    setHighestStreak(0);
    setCurrentStreak(0);
  };

  return (
    <GameContext.Provider value={{
      correctAnswers,
      incrementCorrectAnswers,
      totalQuestions,
      incrementTotalQuestions,
      highestStreak,
      currentStreak,
      setCurrentStreak,
      resetStreak,
      resetGameStats, // Add this function to allow resetting stats from other components
    }}>
      {children}
    </GameContext.Provider>
  );
};
