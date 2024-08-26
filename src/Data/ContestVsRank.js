import AllContestsData from "./AllContestsData";

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

  // Return the number of days
  return days;
}

export default function ContestVsRank(AllContestData, timePeriod = 36) {
  const data = AllContestData;
  
  // Filter data based on time period
  const filteredData = data.filter((item) => {
    const timeStamp = item['ratingUpdateTimeSeconds'];
    const timeNow = Date.now();
    const diffDays = getTimeDifference(timeStamp * 1000, timeNow);
    return diffDays <= timePeriod * 31;
  });

  // Recalculate the BestRank after filtering
  if (filteredData.length > 0) {
    let bestRank = {
      rank: 1e5, // Initialize with a very large value
      contest: "N/A"
    };

    filteredData.forEach((item) => {
      const rank = item['rank'];
      if (bestRank.rank > rank) {
        bestRank.rank = rank;
        bestRank.contest = item.contestName;
      }
    });

    // Update the global BestRank
    BestRank.rank = bestRank.rank;
    BestRank.contest = bestRank.contest;
  } else {
    // If no data matches the filter, reset the BestRank
    BestRank.rank = 1e5;
    BestRank.contest = "N/A";
  }

  return filteredData;
}

export const BestRank = {
  rank: 1e5,
  contest: "N/A"
};
