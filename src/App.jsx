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

function App() {
	const [userName, setUserName] = useState("");
	const [selectedValue, setSelectedValue] = useState(36);

	const [allSubmissions, setAllSubmissions] = useState([]);
	const [allContestData, setAllContestData] = useState([]);
	const [allContestSubmission, setAllContestSubmission] = useState([]);
	const [tagVsCountContest, setTagVsCountContest] = useState([]);
	const [tagVsCountPractice, setTagVsCountPractice] = useState([]);
	const [dataTimePeriod, setDataTimePeriod] = useState([]);
	const [error, seterror] = useState(true)
	const UserExistsOrnot = `https://codeforces.com/api/user.info?handles=${userName}`

	useEffect(() => {
		const CheckUser = async () => {
			try {
				const resp = await fetch(UserExistsOrnot);
				const res = await resp.json();
				//   console.log(res);
				seterror(false);
			} catch (error) {
				console.log("user does not exists");
				seterror(true);
			}
		}
		CheckUser();
	}, [userName,error])

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
		};

		if (userName) {
			fetchData();
		}
	}, [userName, selectedValue,error]);
	// console.log(allSubmissions);
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
					setUserName(event.target.Username.value);
				}}
			>
				<input
					type="text"
					id="Username"
					placeholder="Username"
					className="border px-2 py-1 rounded"
				/>
				<button
					type="submit"
					className="ml-2 bg-blue-500 text-white px-3 py-1 rounded"
				>
					Submit
				</button>
			</form>
				<div className="font-bold text-2xl flex justify-center bg-slate-300">Rating vs Count </div>
				<div className="mb-10">
					<div>
						<div className='flex justify-center text-2xl bg-blue-300 p-2 rounded-lg mt-2'>During Practice</div>
						<Plot allsubmission={allSubmissions} />
					</div>
					<div>
						<div className='flex justify-center text-2xl bg-blue-300 p-2 rounded-lg mt-2'>During Contest</div>
						<Plot allsubmission={allContestSubmission} />
					</div>
				</div>
				<div className="font-bold text-2xl flex justify-center bg-slate-300">
					Accuracy
				</div>
				<div className="flex flex-col md:flex-row justify-center mt-9 px-4">
					<div className='flex justify-center text-lg md:text-2xl mb-4 md:mb-0'>
						<Accuracy data={allSubmissions} title="During Practice" />
					</div>
					<div className='flex justify-center text-lg md:text-2xl'>
						<Accuracy data={allContestSubmission} title="During Contest" />
					</div>
				</div>

				<div className="font-bold text-2xl flex justify-center bg-slate-300">Contest Best Stats</div>
				<div className="flex justify-center mt-9 gap-20">
					<div className='flex justify-center text-2xl'>
						<div className="flow-root bg-slate-300 mb-10">
							<dl className="p-2 my-3 divide-y divide-gray-100 text-sm">
								<div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
									<dt className="font-medium text-gray-900">Handle</dt>
									<dd className="text-gray-700 sm:col-span-2">{userName}</dd>
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
					<label htmlFor="range-dropdown">Select a range: </label>
					<select
						id="range-dropdown"
						value={selectedValue}
						onChange={(event) => {
							setSelectedValue(event.target.value)
						}}
						className="range-dropdown"
					>
						{/* Dropdown options */}
						<option value={3}>3</option>
						<option value={6}>6</option>
						<option value={12}>12</option>
						<option value={24}>24</option>
						<option value={36}>36</option>
					</select>
				</div>
				<div className="flex justify-center mt-9 gap-20">
					<ContestRank data={dataTimePeriod} />
				</div>

				<div className="font-bold text-2xl flex justify-center bg-slate-300">
					Problem Tags
				</div>
				<div className="flex flex-col md:flex-row justify-center mt-9 gap-4 md:gap-20 px-4">
					<div className='flex flex-col items-center text-lg md:text-2xl'>
						<div className="bg-blue-300 p-2 w-full text-center">During Practice</div>
						<Tags data={tagVsCountPractice} />
					</div>
					<div className='flex flex-col items-center text-lg md:text-2xl'>
						<div className="bg-blue-300 p-2 w-full text-center">During Contest</div>
						<Tags data={tagVsCountContest} />
					</div>
				</div>

			</>
		)
	return (
		<>
			<form className="flex justify-center m-5"
				onSubmit={(event) => {
					event.preventDefault();
					setUserName(event.target.Username.value);
				}}
			>
				<input
					type="text"
					id="Username"
					placeholder="Username"
					className="border px-2 py-1 rounded"
				/>
				<button
					type="submit"
					className="ml-2 bg-blue-500 text-white px-3 py-1 rounded"
				>
					Submit
				</button>
			</form>
			<div className="flex justify-center m-5">Enter Valid UserName</div>
			{console.log(error)}
		</>
	)
}

export default App
