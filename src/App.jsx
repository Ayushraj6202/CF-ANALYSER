import { useState } from 'react'
import './App.css'
import TotalProblem from './Data/TotalProblem.js'
import AllContestsData from './Data/AllContestsData.js'
import TagsVsCount from './Data/TagsVsCount.js'
import Accuracy from './componets/Accuracy.jsx'
import TotalLiveContest from './Data/TotalSubLiveContest.js'
function App() {
	  const AllSubmisions  = TotalProblem('Abhijeet_1125');
	  const AllContestData = AllContestsData('Abhijeet_1125');
	  const AllContestSubmission = TotalLiveContest(AllSubmisions);
	return (
		<>
			<Accuracy data={AllSubmisions} title="Practice"/>
			<Accuracy data={AllContestSubmission} title="Contest" />
		</>
	)
}

export default App
