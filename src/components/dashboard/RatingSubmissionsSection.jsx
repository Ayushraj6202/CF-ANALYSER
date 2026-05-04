import RatingDistributionChart from "../charts/RatingDistributionChart.jsx";
import Section from "../common/Section.jsx";

export default function RatingSubmissionsSection({
	allContestSubmission,
	allSubmissions,
}) {
	return (
		<Section title="Rating vs Submissions" eyebrow="Solved problem ratings">
			<div className="chart-grid">
				<div className="analytics-card">
					<div className="card-title">
						<h3>Practice</h3>
						<span>Accepted problems by rating</span>
					</div>
					<RatingDistributionChart allsubmission={allSubmissions} />
				</div>
				<div className="analytics-card">
					<div className="card-title">
						<h3>Contest</h3>
						<span>Accepted contest problems by rating</span>
					</div>
					<RatingDistributionChart allsubmission={allContestSubmission} />
				</div>
			</div>
		</Section>
	);
}
