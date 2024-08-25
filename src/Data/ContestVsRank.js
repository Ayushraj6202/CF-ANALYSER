import AllContestsData from "./AllContestsData";
const BestRank = {
    "rank":1e5,
    "contest":"name"
}
export default function ContestVsRank(AllContestData){
    const data = AllContestData;
    data.forEach((item)=>{
        let rank = item['rank'];
        if(BestRank.rank>rank){
            BestRank.rank=rank;
            BestRank.contest=item.contestName;
        }
    })
    return data;
}
export {BestRank}