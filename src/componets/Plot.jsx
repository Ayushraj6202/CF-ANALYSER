import BarGraph from "../utils/BarGraph.jsx"
import RatingVsCount from '../Data/RatingVsCount.js'

export default function Plot({allsubmission}){
    
    const ratingVscount_practice = RatingVsCount(allsubmission);
    // console.log("plot me ",allsubmission,ratingVscount_practice);
    
    return (
        <div>
            <BarGraph dataset={ratingVscount_practice}/>
        </div>
    )
}