import Accepted from "./Accepted.js";

export default function TotalLiveContest(data) {
    const AllCorrect = data;
    // console.log("allcorrect ",data);
    
    const Totalivesub = AllCorrect.filter((item) => {
        return item["author"] && item["author"]['participantType'] === 'CONTESTANT';
    });

    // Log the result for debugging
    // console.log("Totalivesub:", Totalivesub);

    return Totalivesub;
}
