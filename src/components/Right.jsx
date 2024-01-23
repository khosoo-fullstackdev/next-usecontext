import React from "react";
import { useScoreData } from "@/context/ScoreContext";

export default function Right() {
  const { data, setData } = useScoreData();

  function IncrementHandler(e, i) {
    const dataNew = [...data];
    dataNew[i].score++;
    setData(dataNew);
  }

  function DecrementHandler(e, i) {
    const dataNew = [...data];
    dataNew[i].score--;
    setData(dataNew);
  }

  return (
    <div>
      {data.map((e, index) => (
        <div className="items-center justify-between bg-green-300">
          <button
            className="w-[50px]"
            onClick={() => IncrementHandler(e, index)}
          >
            +
          </button>
          <button
            className="w-[50px]"
            onClick={() => DecrementHandler(e, index)}
          >
            -
          </button>
        </div>
      ))}
    </div>
  );
}
