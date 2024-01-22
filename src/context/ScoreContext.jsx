import React, { useContext, createContext, useState } from "react";

const ScoreContext = createContext();
export const useScoreData = () => useContext(ScoreContext);

export function ScoreProvider({ children }) {
  const [data, setData] = useState(players);
  const [score, setScore] = useState(players);

  return (
    <ScoreContext.Provider value={{ data, setData, score, setScore }}>
      {children}
    </ScoreContext.Provider>
  );
}

const players = [
  {
    name: "Andy",
    score: 0,
  },
  {
    name: "Dash",
    score: 5,
  },
  {
    name: "Munkuu",
    score: 10,
  },
  {
    name: "Khos",
    score: 100,
  },
];
