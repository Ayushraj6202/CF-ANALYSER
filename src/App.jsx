import "./App.css";
import LoadingPanel from "./components/common/LoadingPanel.jsx";
import AccuracySection from "./components/dashboard/AccuracySection.jsx";
import EmptyState from "./components/dashboard/EmptyState.jsx";
import ProblemTagsSection from "./components/dashboard/ProblemTagsSection.jsx";
import ProfileStrip from "./components/dashboard/ProfileStrip.jsx";
import RatingGraphSection from "./components/dashboard/RatingGraphSection.jsx";
import RatingSubmissionsSection from "./components/dashboard/RatingSubmissionsSection.jsx";
import StatsGrid from "./components/dashboard/StatsGrid.jsx";
import Footer from "./components/layout/Footer.jsx";
import Hero from "./components/layout/Hero.jsx";
import useCodeforcesAnalysis from "./hooks/useCodeforcesAnalysis.js";

function App() {
	const {
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
	} = useCodeforcesAnalysis();

	const handleQuickHandle = (handle) => {
		setInputHandle(handle);
		loadUser(handle);
	};

	return (
		<main className="app-shell">
			<Hero
				error={error}
				inputHandle={inputHandle}
				loading={loading}
				onHandleChange={setInputHandle}
				onQuickHandle={handleQuickHandle}
				onSubmit={submitHandle}
			/>

			{loading && <LoadingPanel />}

			{!loading && !hasData && <EmptyState />}

			{!loading && hasData && (
				<div className="dashboard">
					<ProfileStrip userName={userName} />

					<StatsGrid
						allContestData={allContestData}
						allContestSubmission={allContestSubmission}
						allSubmissions={allSubmissions}
						selectedValue={selectedValue}
					/>

					<RatingSubmissionsSection
						allContestSubmission={allContestSubmission}
						allSubmissions={allSubmissions}
					/>

					<AccuracySection
						allContestSubmission={allContestSubmission}
						allSubmissions={allSubmissions}
					/>

					<RatingGraphSection
						dataTimePeriod={dataTimePeriod}
						selectedValue={selectedValue}
						onSelectedValueChange={setSelectedValue}
					/>

					<ProblemTagsSection
						tagVsCountContest={tagVsCountContest}
						tagVsCountPractice={tagVsCountPractice}
					/>
				</div>
			)}

			<Footer />
		</main>
	);
}

export default App;
