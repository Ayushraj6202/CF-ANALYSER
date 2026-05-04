function getTimeDifference(timestamp1, timestamp2) {
  const secondsInDay = 86400;

  const differenceMs = Math.abs(timestamp1 - timestamp2);
  const totalSeconds = Math.floor(differenceMs / 1000);
  const days = Math.floor(totalSeconds / secondsInDay);

  return days;
}

export default function ContestVsRank(AllContestData, timePeriod = 36) {
  const data = AllContestData;
  
  const filteredData = data.filter((item) => {
    const timeStamp = item['ratingUpdateTimeSeconds'];
    const timeNow = Date.now();
    const diffDays = getTimeDifference(timeStamp * 1000, timeNow);
    return diffDays <= timePeriod * 31;
  });

  if (filteredData.length > 0) {
    let bestRank = {
      rank: 1e5,
      contest: "N/A"
    };

    filteredData.forEach((item) => {
      const rank = item['rank'];
      if (bestRank.rank > rank) {
        bestRank.rank = rank;
        bestRank.contest = item.contestName;
      }
    });

    BestRank.rank = bestRank.rank;
    BestRank.contest = bestRank.contest;
  } else {
    BestRank.rank = 1e5;
    BestRank.contest = "N/A";
  }

  return filteredData;
}

export const BestRank = {
  rank: 1e5,
  contest: "N/A"
};
