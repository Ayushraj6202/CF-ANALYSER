import React from "react";
import Accepted from "../Data/Accepted.js";
import MyPieChart from "../utils/PieChart.jsx";

export default function Accuracy({data,title}) {
    // console.log("acc ",data);
    
    const totalProblemCount = data.length;
    const acceptedCount = Accepted(data).length;
    const acc = acceptedCount * 1.0 / totalProblemCount;
    // console.log(acc);
    const content = [
        { id: 'Accepted', label: 'Accepted', value: acc*100 },
        { id: 'Rejected', label: 'Rejected', value: (1-acc)*100 },
      ];
    return (
        <>
        <div className="bg-slate-70">
            <div className="flex bg-blue-300 p-2">{title}</div>
            <MyPieChart data={content}/>
        </div>
        </>
    )
}