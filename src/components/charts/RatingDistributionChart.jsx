import RatingVsCount from "../../Data/RatingVsCount.js";
import RatingBarChart from "./RatingBarChart.jsx";

export default function RatingDistributionChart({ allsubmission }) {
	const ratingVscountPractice = RatingVsCount(allsubmission);

	return <RatingBarChart dataset={ratingVscountPractice} />;
}
