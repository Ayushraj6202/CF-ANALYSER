import { useEffect, useState } from "react";
import "./App.css";
import TotalProblem from "./Data/TotalProblem.js";
import AllContestsData from "./Data/AllContestsData.js";
import Accuracy from "./componets/Accuracy.jsx";
import TotalSubLiveContest from "./Data/TotalSubLiveContest.js";
import Plot from "./componets/Plot.jsx";
import TagsVsCount from "./Data/TagsVsCount.js";
import Tags from "./utils/Tags.jsx";
import ContestVsRank, { BestRank } from "./Data/ContestVsRank.js";
import ContestRank from "./utils/ContestRank.jsx";
import LoadingComp from "./componets/LoadingComp.jsx";

function App() {
	const [userName, setUserName] = useState("");
	const [selectedValue, setSelectedValue] = useState(36);
	const [submitClicked, setSubmitClicked] = useState(true);
	const [loading, setLoading] = useState(false);

	const [allSubmissions, setAllSubmissions] = useState([]);
	const [allContestData, setAllContestData] = useState([]);
	const [allContestSubmission, setAllContestSubmission] = useState([]);
	const [tagVsCountContest, setTagVsCountContest] = useState([]);
	const [tagVsCountPractice, setTagVsCountPractice] = useState([]);
	const [dataTimePeriod, setDataTimePeriod] = useState([]);
	const [error, seterror] = useState(false);
	const UserExistsOrnot = `https://codeforces.com/api/user.info?handles=${userName}`

	useEffect(() => {
		const CheckUser = async () => {
			try {
				const resp = await fetch(UserExistsOrnot);
				const res = await resp.json();
				// console.log("res ",res);
				if (res.status === 'FAILED') {
					setLoading(false);
					// console.log("user does not exists");
					seterror(true);
				}
				else {
					seterror(false);
				}
			} catch (error) {

				setLoading(false);
				console.log("user does not exists");
				seterror(true);
			}
		}
		CheckUser();
		// setLoading(false)
	}, [userName, submitClicked, setLoading, error])

	useEffect(() => {
		const fetchData = async () => {
			const submissions = await TotalProblem(userName);
			const contestData = await AllContestsData(userName);
			const liveSubmissions = TotalSubLiveContest(submissions);
			const tagVsCountContestData = TagsVsCount(liveSubmissions);
			const tagVsCountPracticeData = TagsVsCount(submissions);
			const timePeriodData = ContestVsRank(contestData, selectedValue);
			//   console.log(submissions);

			setAllSubmissions(submissions);
			setAllContestData(contestData);
			setAllContestSubmission(liveSubmissions);
			setTagVsCountContest(tagVsCountContestData);
			setTagVsCountPractice(tagVsCountPracticeData);
			setDataTimePeriod(timePeriodData);
			setLoading(false);
		};

		if (userName) {
			fetchData();
		}
	}, [userName, selectedValue, error, submitClicked, loading]);
	// console.log(error);


	if (allSubmissions.length && allContestData.length)
		return (
			<>
				<form className="flex justify-center m-5"
					onSubmit={(event) => {
						event.preventDefault();
						setAllSubmissions([]);
						setAllContestData([]);
						setAllContestSubmission([]);
						setTagVsCountContest([]);
						setTagVsCountPractice([]);
						setDataTimePeriod([]);
						setSubmitClicked(e => !e);
						setUserName(event.target.Username.value);
						setLoading(true);
					}}
				>
					<input
						type="text"
						id="Username"
						placeholder="Codeforces UserName"
						className="border px-2 py-1 rounded"
					/>
					<button
						type="submit"
						className="ml-2 bg-blue-500 text-white px-3 py-1 rounded"
					>
						Submit
					</button>
				</form>
				<div className="flex justify-center m-3 bg-gray-600 text-white p-1 text-2xl rounded-lg w-1/2 mx-auto">
					{userName}
				</div>
				<div className="font-bold text-2xl flex justify-center bg-slate-300">Rating vs Submission</div>
				<div className="mb-10 mx-auto">
					<div className="mb-10">
						<div className='flex justify-center text-2xl bg-blue-300 p-2 rounded-lg mt-2'>During Practice</div>
						<Plot allsubmission={allSubmissions} />
						<div className="bg-blue-300 my-2 mx-auto flex justify-center">Swipe left or right for a better view.</div>
					</div>
					<div>
						<div className='flex justify-center text-2xl bg-blue-300 p-2 rounded-lg mt-2'>During Contest</div>
						<Plot allsubmission={allContestSubmission} />
						<div className="bg-blue-300 my-2 mx-auto flex justify-center">Swipe left or right for a better view.</div>
					</div>
				</div>
				<div className="font-bold text-2xl flex justify-center bg-slate-300">
					Accuracy
				</div>
				<div className="flex flex-col md:flex-row justify-center mt-10 px-2 ">
					<div className='flex justify-center text-lg md:text-2xl mb-1'>
						<Accuracy data={allSubmissions} title="During Practice" />
					</div>
					<div className='flex justify-center text-lg md:text-2xl mb-1'>
						<Accuracy data={allContestSubmission} title="During Contest" />
					</div>
				</div>

				<div className="font-bold text-2xl flex justify-center mx-auto bg-slate-300">Contest Best Stats</div>
				<div className="flex justify-center mt-9 gap-10">
					<div className='flex justify-center text-2xl'>
						<div className="flow-root bg-slate-300 mb-10">
							<dl className="p-2 my-3 divide-y divide-gray-100 text-sm">
								<div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
									<dt className="font-medium text-gray-900">Handle</dt>
									<dd className="text-gray-700 sm:col-span-2">{userName}</dd>
								</div>

								<div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
									<dt className="font-medium text-gray-900">No of Contest</dt>
									<dd className="text-gray-700 sm:col-span-2">{allContestData.length}</dd>
								</div>

								<div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
									<dt className="font-medium text-gray-900">Best Rank</dt>
									<dd className="text-gray-700 sm:col-span-2">{BestRank['rank']}</dd>
								</div>

								<div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
									<dt className="font-medium text-gray-900">Contest Name</dt>
									<dd className="text-gray-700 sm:col-span-2">{BestRank['contest']}</dd>
								</div>
							</dl>
						</div>

					</div>
					<div className='flex justify-center text-2xl'>

					</div>
				</div>

				<div className="font-bold text-2xl flex justify-center bg-slate-300">Rating Graph</div>
				<div className="dropdown-container flex justify-center mt-10">
					<label htmlFor="range-dropdown">Select :  </label>
					<select
						id="range-dropdown"
						value={selectedValue}
						onChange={(event) => {
							setSelectedValue(event.target.value)
						}}
						className="range-dropdown"
					>
						<option value={3}>Last 3 Months</option>
						<option value={6}>Last 6 Months</option>
						<option value={12}>Last 12 Months</option>
						<option value={24}>Last 24 Months</option>
						<option value={36}>Last 36 Months</option>
						<option value={120}>Last 120 Months</option>
					</select>
				</div>
				<div className="flex justify-center mt-9 gap-20">
					<ContestRank data={dataTimePeriod} />
				</div>

				<div className="font-bold text-2xl flex justify-center bg-slate-300 mb-2">
					Problem Tags
				</div>
				<div className="flex flex-col md:flex-row justify-center mt-0 gap-1  px-2">
					<div className="flex flex-col items-center text-lg md:text-2xl">
						<div className="bg-blue-300 p-1 w-full text-center">During Practice</div>
						<Tags data={tagVsCountPractice} />
						<div className="bg-slate-300 p-2 space-y-1">
							<div>DP: {tagVsCountPractice['dp']}</div>
							<div>Binary Search: {tagVsCountPractice['binary search']}</div>
							<div>Data Structures: {tagVsCountPractice['data structures']}</div>
							<div>DFS and Similar: {tagVsCountPractice['dfs and similar']}</div>
							<div>Trees: {tagVsCountPractice['trees']}</div>
						</div>

					</div>
					<div className="flex flex-col items-center text-lg md:text-2xl">
						<div className="bg-blue-300 p-1 w-full text-center">During Contest</div>
						<Tags data={tagVsCountContest} />
						<div className="bg-slate-300 mb-2 mx-auto p-2 space-y-1">
							<div>DP: {tagVsCountContest['dp']}</div>
							<div>Binary Search: {tagVsCountContest['binary search']}</div>
							<div>Data Structures: {tagVsCountContest['data structures']}</div>
							<div>DFS and Similar: {tagVsCountContest['dfs and similar']}</div>
							<div>Trees: {tagVsCountContest['trees']}</div>
						</div>

					</div>
				</div>
				<div className="bg-blue-300 mt-2  py-2 flex flex-wrap mx-auto gap-4 justify-center ">
					<div >
						&copy;AYUSH RAJ
					</div>
					<div className="github-link-container">
						<a
							href="https://github.com/Ayushraj6202"
							target="_blank"
							rel="noopener noreferrer"
							className="github-link"
						>
							GitHub
						</a>
					</div>
				</div>

			</>
		)
	else if (loading && error === false) {
		// console.log(" user " ,userName);
		return (
			<>
				<LoadingComp />
			</>
		)
	}
	return (
		<>
			<form className="flex justify-center m-5"
				onSubmit={(event) => {
					event.preventDefault();
					setUserName(event.target.Username.value);
					setLoading(true);
				}}
			>
				<input
					type="text"
					id="Username"
					placeholder="Codeforces UserName"
					className="border px-2 py-1 rounded"
				/>
				<button
					type="submit"
					className="ml-2 bg-blue-500 text-white px-3 py-1 rounded"
				>
					Submit
				</button>
			</form>
			{
				error && (
					userName !== '' ? (
						<div className="flex justify-center m-5">Invalid Username</div>
					) : (
						<div className="flex justify-center m-5">Enter Username</div>
					)
				)
			}
		</>
	)
}

export default App
