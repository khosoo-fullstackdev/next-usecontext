import React from "react";
import { useScoreData } from "@/context/ScoreContext";

export default function Right() {
  const { score, setScore } = useScoreData();
  function IncrementHandler() {
    return;
  }
  function DecrementHandler() {
    return;
  }
  return (
    <div className="w-1/2 bg-green-300 h-[100vh] flex">
      <button onClick={IncrementHandler}>+</button>
      <button onClick={DecrementHandler}>-</button>
    </div>
  );
}
