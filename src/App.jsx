import { useEffect, useState } from 'react'
import './App.css'
import TotalProblem from './Data/TotalProblem.js'
import AllContestsData from './Data/AllContestsData.js'
import Accuracy from './componets/Accuracy.jsx'
import TotalSubLiveContest from './Data/TotalSubLiveContest.js'
import Plot from './componets/Plot.jsx'
import TagsVsCount from './Data/TagsVsCount.js'
import Tags from './utils/Tags.jsx'
import ContestVsRank, { BestRank } from './Data/ContestVsRank.js'
import ContestRank from './utils/ContestRank.jsx'



function App() {
	const [userName, setUserName] = useState('Abhijeet_1125');
	const [selectedValue, setSelectedValue] = useState(36);


	const AllSubmisions = TotalProblem(userName);
	const AllContestData = AllContestsData(userName);
	const AllContestSubmission = TotalSubLiveContest(AllSubmisions);
	const tagvsCount_Contest = TagsVsCount(AllContestSubmission)
	const tagvsCount_practice = TagsVsCount(AllSubmisions);
	const DataTTimePeriod = ContestVsRank(AllContestData, selectedValue)
	
	// console.log(BestRank);
	
	if (AllSubmisions.length && AllContestData.length)
		return (
			<>
				<div className="font-bold text-2xl flex justify-center bg-slate-300">Rating vs Count </div>
				<div className="mb-10">
					<div>
						<div className='flex justify-center text-2xl bg-blue-300 p-2 rounded-lg mt-2'>During Practice</div>
						<Plot allsubmission={AllSubmisions} />
					</div>
					<div>
						<div className='flex justify-center text-2xl bg-blue-300 p-2 rounded-lg mt-2'>During Contest</div>
						<Plot allsubmission={AllContestSubmission} />
					</div>
				</div>
				<div className="font-bold text-2xl flex justify-center bg-slate-300">
					Accuracy
				</div>
				<div className="flex flex-col md:flex-row justify-center mt-9 px-4">
					<div className='flex justify-center text-lg md:text-2xl mb-4 md:mb-0'>
						<Accuracy data={AllSubmisions} title="During Practice" />
					</div>
					<div className='flex justify-center text-lg md:text-2xl'>
						<Accuracy data={AllContestSubmission} title="During Contest" />
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
					<ContestRank data={DataTTimePeriod} />
				</div>

				<div className="font-bold text-2xl flex justify-center bg-slate-300">
					Problem Tags
				</div>
				<div className="flex flex-col md:flex-row justify-center mt-9 gap-4 md:gap-20 px-4">
					<div className='flex flex-col items-center text-lg md:text-2xl'>
						<div className="bg-blue-300 p-2 w-full text-center">During Practice</div>
						<Tags data={tagvsCount_practice} />
					</div>
					<div className='flex flex-col items-center text-lg md:text-2xl'>
						<div className="bg-blue-300 p-2 w-full text-center">During Contest</div>
						<Tags data={tagvsCount_Contest} />
					</div>
				</div>

			</>
		)
	return (
		<div>Enter Valid UserName</div>
	)
}

export default App
