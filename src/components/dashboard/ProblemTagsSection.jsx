import TagPieChart from "../charts/TagPieChart.jsx";
import Section from "../common/Section.jsx";
import TagHighlights from "./TagHighlights.jsx";

export default function ProblemTagsSection({
	tagVsCountContest,
	tagVsCountPractice,
}) {
	return (
		<Section title="Problem Tags" eyebrow="Topic strengths">
			<div className="chart-grid">
				<div className="analytics-card">
					<div className="card-title">
						<h3>Practice</h3>
						<span>Most frequent accepted topics</span>
					</div>
					<TagPieChart data={tagVsCountPractice} />
					<TagHighlights data={tagVsCountPractice} />
				</div>
				<div className="analytics-card">
					<div className="card-title">
						<h3>Contest</h3>
						<span>Topics solved during contests</span>
					</div>
					<TagPieChart data={tagVsCountContest} />
					<TagHighlights data={tagVsCountContest} />
				</div>
			</div>
		</Section>
	);
}
