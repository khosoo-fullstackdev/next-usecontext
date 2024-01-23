import React from "react";

import { useScoreData } from "@/context/ScoreContext";

export default function Left() {
  const { data } = useScoreData();
  console.log(data);
  return data.map((a) => {
    return (
      <div className="items-center justify-between bg-slate-500">
        <div>{a.name}</div>
        <div>{a.score}</div>
      </div>
    );
  });
}
