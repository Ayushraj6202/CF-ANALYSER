import Accepted from "./Accepted.js";

export default function RatingCountContest(data){
    const AllCorrect = Accepted(data);
    const Live = AllCorrect.filter((item)=>{
        // console.log(item);
        return ((item["author"]['participantType']==='CONTESTANT'))
    })
    // console.log(Live);
    const count = {};
    for(let i =0;i<Live.length;i++)
    {
        let p = Live[i]['problem']['rating'];
        count[p] = (count[p]||0) + 1;
    }
    // console.log(count);
    return count;
}   