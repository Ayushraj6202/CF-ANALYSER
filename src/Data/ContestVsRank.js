import AllContestsData from "./AllContestsData";
const BestRank = {
    "rank":1e5,
    "contest":"name"
}
function getTimeDifference(timestamp1, timestamp2) {
    // Convert timestamp2 from seconds to milliseconds
    const timestamp2Ms = timestamp2;
    
    // Calculate the difference in milliseconds
    const differenceMs = Math.abs(timestamp1 - timestamp2Ms);
    
    // Calculate days, hours, minutes, and seconds
    const secondsInMinute = 60;
    const secondsInHour = 3600;
    const secondsInDay = 86400;
    
    const totalSeconds = Math.floor(differenceMs / 1000);
    const days = Math.floor(totalSeconds / secondsInDay);
    const hours = Math.floor((totalSeconds % secondsInDay) / secondsInHour);
    const minutes = Math.floor((totalSeconds % secondsInHour) / secondsInMinute);
    const seconds = totalSeconds % secondsInMinute;
  
    // Return the formatted difference
    return days;
    // return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  }

export default function ContestVsRank(AllContestData,timePeriod=36){
    const data = AllContestData;
    data.forEach((item)=>{
        let rank = item['rank'];
        if(BestRank.rank>rank){
            BestRank.rank=rank;
            BestRank.contest=item.contestName;
        }
    })
    const NewData = data.filter(
        (item)=>{
            // console.log(item);
            const timeStamp = item['ratingUpdateTimeSeconds'];
            const timeNow = Date.now();
            // console.log(timeStamp,timeNow);
            const diffDays = (getTimeDifference(timeStamp*1000,timeNow));
            // console.log(diffDays<=timePeriod*30);
            return (diffDays<=timePeriod*31);
        }
    )
    // console.log(NewData);
    
    return NewData;
}
export {BestRank}