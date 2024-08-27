import React from "react";
import Accepted from "../Data/Accepted.js";
import MyPieChart from "../utils/PieChart.jsx";

export default function Accuracy({data,title}) {
    // console.log("acc ",data);
    
    const totalProblemCount = data.length;
    const acceptedCount = Accepted(data).length;
    const acc = (acceptedCount * 1.0 / totalProblemCount).toFixed(3);
    // console.log(acc);
    const content = [
        { id: 'Accepted', label: 'Accepted', value: (acc*100) ,color:'#00FFFF'},
        { id: 'Rejected', label: 'Rejected', value: (1-acc)*100,color:'#0F0000' },
      ];
    return (
        <>
        <div className="bg-slate-70">
            <div className="flex bg-blue-300 px-2 mx-auto justify-center">{title}</div>
            <MyPieChart data={content}/>
        </div>
        </>
    )
}