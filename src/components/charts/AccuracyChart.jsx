import Accepted from "../../Data/Accepted.js";
import AccuracyPieChart from "./AccuracyPieChart.jsx";

export default function AccuracyChart({ data, title }) {
	const totalProblemCount = data.length;
	const acceptedCount = Accepted(data).length;
	const acc = totalProblemCount ? acceptedCount / totalProblemCount : 0;
	const content = [
		{ id: "Accepted", label: "Accepted", value: acc * 100, color: "#0f766e" },
		{ id: "Rejected", label: "Rejected", value: (1 - acc) * 100, color: "#f97316" },
	];

	return (
		<div className="analytics-card">
			<div className="card-title">
				<h3>{title}</h3>
				<span>
					{acceptedCount} accepted of {totalProblemCount} submissions
				</span>
			</div>
			<AccuracyPieChart data={content} />
		</div>
	);
}
