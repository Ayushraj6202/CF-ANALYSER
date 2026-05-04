import AccuracyChart from "../charts/AccuracyChart.jsx";
import Section from "../common/Section.jsx";

export default function AccuracySection({ allContestSubmission, allSubmissions }) {
	return (
		<Section title="Accuracy" eyebrow="Accepted vs rejected">
			<div className="chart-grid compact">
				<AccuracyChart data={allSubmissions} title="Practice" />
				<AccuracyChart data={allContestSubmission} title="Contest" />
			</div>
		</Section>
	);
}
