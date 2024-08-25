import Accepted from "./Accepted.js";

export default function TotalRatingVsCount(allSubmissions){
    // console.log("rating count",allSubmissions);
    
    const AllCorrect = Accepted(allSubmissions);
    const count = {};
    for(let i =0;i<AllCorrect.length;i++)
    {
        let p = AllCorrect[i]['problem']['rating'];
        if(p){
            count[p] = (count[p]||0) + 1;
        }
    }
    // console.log(count);
    return count;
}   