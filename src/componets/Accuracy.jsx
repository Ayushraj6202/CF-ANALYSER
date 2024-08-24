import React from "react";
import TotalProblem from "../Data/TotalProblem.js";
import Accepted from "../Data/Accepted.js";
import MyPieChart from "../utils/PieChart.jsx";

export default function Accuracy({ userName }) {
    const totalProblemCount = TotalProblem(userName).length;
    const acceptedCount = Accepted(userName).length;
    const acc = acceptedCount * 1.0 / totalProblemCount;
    console.log(acc);
    const data = [
        { id: 'Accepted', label: 'Accepted', value: acc*100 },
        { id: 'Rejected', label: 'Rejected', value: (1-acc)*100 },
      ];
    return (
        <>
            {/* <div className="bg-slate-500">Accuracy is {acc}</div> */}
        <MyPieChart data={data}/>
        </>
    )
}