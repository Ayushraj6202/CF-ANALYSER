import { useState } from 'react'
import './App.css'
import Accepted from './Data/Accepted.js'
import TotalProblem from './Data/TotalProblem.js'
import LiveContest from './Data/LiveContest.js'
import TotalRatingVsCount from './Data/TotalRatingVsCount.js'
import TagsVsCount from './Data/TagsVsCount.js'
import AllContestsData from './Data/AllContestsData.js'
import ContestVsRank, { BestRank } from './Data/ContestVsRank.js'
import Accuracy from './componets/Accuracy.jsx'
function App() {
	//   const pr = Accepted('Pain_Gain')
	//   TotalProblem('Pain_Gain')
	//	 LiveContest('Pain_Gain')
	//   TotalRatingVsCount('Pain_Gain')
	//   TagsVsCount('Pain_Gain')
	// AllContestsData('Pain_gain')
	// console.log(BestRank);
	return (
		<>
			<Accuracy userName="Pain_Gain"/>
		</>
	)
}

export default App
