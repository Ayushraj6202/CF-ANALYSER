import React from "react";
import TotalProblem from './TotalProblem.js'

export default function Accepted(allSubmission) {
  const data = allSubmission;
  // console.log("acc",allSubmission);
  if(!allSubmission)return [];
  const correctAns = allSubmission.filter((item) => item.verdict === "OK");
  // console.log(correctAns);
  return correctAns;
}
