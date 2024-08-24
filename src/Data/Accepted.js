import React from "react";
import TotalProblem from './TotalProblem.js'

export default function Accepted(userName) {
  const data = TotalProblem(userName);
  // console.log("data",data);
  
  const correctAns = data.filter((item) => item.verdict === "OK");
  // console.log(correctAns);
  return correctAns;
}
