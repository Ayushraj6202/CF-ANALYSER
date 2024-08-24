import Accepted from "./Accepted.js";

export default function TotalRatingVsCount(userName){
    const AllCorrect = Accepted(userName);
    const count = {};
    for(let i =0;i<AllCorrect.length;i++)
    {
        let p = AllCorrect[i]['problem']['rating'];
        count[p] = (count[p]||0) + 1;
    }
    // console.log(count);
    return count;
}   