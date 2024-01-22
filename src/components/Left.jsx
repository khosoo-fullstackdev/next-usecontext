import React from "react";

import { useScoreData } from "@/context/ScoreContext";
const daawdaw = useScoreData();
console.log(daawdaw);

export default function Left() {
  const [data, setData] = useScoreData();
  const names = data.names;

  const scores = data.scores;
  return (
    <div className="w-1/2 bg-slate-500">
      {names.map((a) => {
        return <div></div>;
      })}
      {scores.map((a) => {
        return <div></div>;
      })}
    </div>
  );
}
