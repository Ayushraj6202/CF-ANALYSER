import Accepted from "./Accepted.js";

export default function TotalLiveContest(data){
    const AllCorrect = data;
    const Totalivesub = AllCorrect.filter((item)=>{
        // console.log(item);
        return ((item["author"]['participantType']==='CONTESTANT'))
    })
   return Totalivesub;
}   