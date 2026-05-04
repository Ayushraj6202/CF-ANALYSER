import TagsVsCount from "./TagsVsCount";
import TotalSubLiveContest from './TotalSubLiveContest.js'
import RatingVsCount from './RatingVsCount.js'
import ContestVsRank from "./ContestVsRank.js";

export default function AllData(allsubmission,AllContestData){
    const tagvsCount_practice = TagsVsCount(allsubmission);
    const AllContestSubmission = TotalSubLiveContest(allsubmission);

    const tagvsCount_Contest = TagsVsCount(AllContestSubmission)
    const ratingVscount_practice = RatingVsCount(allsubmission);
    const ratingVscount_contest = RatingVsCount(AllContestSubmission)
    const RatingGraph = ContestVsRank(AllContestData,5)

    return {
        tagvsCount_practice,
        tagvsCount_Contest,
        ratingVscount_practice,
        ratingVscount_contest,
        RatingGraph,
    };
}
