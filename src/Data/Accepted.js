import React from "react";
import TotalProblem from './TotalProblem.js'

export default function Accepted(allSubmission) {
  const data = allSubmission;
  
  const correctAns = data.filter((item) => item.verdict === "OK");
  // console.log(correctAns);
  return correctAns;
}
