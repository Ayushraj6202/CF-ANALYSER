import TagsVsCount from "./TagsVsCount";
import TotalSubLiveContest from './TotalSubLiveContest.js'
import RatingVsCount from './RatingVsCount.js'
import ContestVsRank from "./ContestVsRank.js";

export default function AllData(allsubmission,AllContestData){
    const tagvsCount_practice = TagsVsCount(allsubmission);
    // console.log("practice",tagvsCount_practice);
    const AllContestSubmission = TotalSubLiveContest(allsubmission);

    const tagvsCount_Contest = TagsVsCount(AllContestSubmission)
    // console.log("contest",tagvsCount_Contest);
    
    const ratingVscount_practice = RatingVsCount(allsubmission);
    // console.log(ratingVscount_practice);
    const ratingVscount_contest = RatingVsCount(AllContestSubmission)
    // console.log(ratingVscount_contest);

    const RatingGraph = ContestVsRank(AllContestData,5)
    // console.log(RatingGraph);

}