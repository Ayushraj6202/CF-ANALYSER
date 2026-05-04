export default function TotalLiveContest(data) {
    const AllCorrect = data;

    const Totalivesub = AllCorrect.filter((item) => {
        return item["author"] && item["author"]['participantType'] === 'CONTESTANT';
    });

    return Totalivesub;
}
