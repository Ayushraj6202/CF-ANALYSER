import { useMemo, useState } from "react";
import AllContestsData from "../Data/AllContestsData.js";
import ContestVsRank from "../Data/ContestVsRank.js";
import TagsVsCount from "../Data/TagsVsCount.js";
import TotalProblem from "../Data/TotalProblem.js";
import TotalSubLiveContest from "../Data/TotalSubLiveContest.js";

export default function useCodeforcesAnalysis() {
	const [inputHandle, setInputHandle] = useState("");
	const [userName, setUserName] = useState("");
	const [selectedValue, setSelectedValue] = useState(36);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const [allSubmissions, setAllSubmissions] = useState([]);
	const [allContestData, setAllContestData] = useState([]);
	const [allContestSubmission, setAllContestSubmission] = useState([]);
	const [tagVsCountContest, setTagVsCountContest] = useState({});
	const [tagVsCountPractice, setTagVsCountPractice] = useState({});

	const dataTimePeriod = useMemo(
		() => ContestVsRank(allContestData, selectedValue),
		[allContestData, selectedValue],
	);

	const hasData = allSubmissions.length > 0 || allContestData.length > 0;

	const resetData = () => {
		setAllSubmissions([]);
		setAllContestData([]);
		setAllContestSubmission([]);
		setTagVsCountContest({});
		setTagVsCountPractice({});
	};

	const loadUser = async (handle) => {
		setLoading(true);
		setError("");
		resetData();

		try {
			const userResponse = await fetch(
				`https://codeforces.com/api/user.info?handles=${handle}`,
			);
			const userResult = await userResponse.json();

			if (!userResponse.ok || userResult.status === "FAILED") {
				throw new Error("No Codeforces user was found for that handle.");
			}

			const [submissions = [], contestData = []] = await Promise.all([
				TotalProblem(handle),
				AllContestsData(handle),
			]);
			const liveSubmissions = TotalSubLiveContest(submissions);

			setUserName(handle);
			setAllSubmissions(submissions);
			setAllContestData(contestData);
			setAllContestSubmission(liveSubmissions);
			setTagVsCountContest(TagsVsCount(liveSubmissions));
			setTagVsCountPractice(TagsVsCount(submissions));
		} catch (err) {
			setUserName("");
			setError(err.message || "Something went wrong while reading Codeforces data.");
		} finally {
			setLoading(false);
		}
	};

	const submitHandle = (event) => {
		event.preventDefault();
		const handle = inputHandle.trim();

		if (!handle) {
			setError("Enter a Codeforces handle to start the analysis.");
			resetData();
			setUserName("");
			return;
		}

		loadUser(handle);
	};

	return {
		allContestData,
		allContestSubmission,
		allSubmissions,
		dataTimePeriod,
		error,
		hasData,
		inputHandle,
		loadUser,
		loading,
		selectedValue,
		setInputHandle,
		setSelectedValue,
		submitHandle,
		tagVsCountContest,
		tagVsCountPractice,
		userName,
	};
}
