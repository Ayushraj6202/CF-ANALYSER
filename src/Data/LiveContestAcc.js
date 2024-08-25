import Accepted from "./Accepted.js";

export default function LiveContestAcc(data){
    const AllCorrect = Accepted(data);
    const Live = AllCorrect.filter((item)=>{
        // console.log(item);
        return ((item["author"]['participantType']==='CONTESTANT'))
    })
    return Live;
}   