import ContestRatingChart from "../charts/ContestRatingChart.jsx";
import Section from "../common/Section.jsx";

export default function RatingGraphSection({
	dataTimePeriod,
	selectedValue,
	onSelectedValueChange,
}) {
	return (
		<Section
			title="Rating Graph"
			eyebrow="Contest rank movement"
			action={
				<select
					id="range-dropdown"
					value={selectedValue}
					onChange={(event) => onSelectedValueChange(Number(event.target.value))}
					className="range-dropdown"
					aria-label="Select rating graph time range"
				>
					<option value={3}>Last 3 months</option>
					<option value={6}>Last 6 months</option>
					<option value={12}>Last 12 months</option>
					<option value={24}>Last 24 months</option>
					<option value={36}>Last 36 months</option>
					<option value={120}>All available</option>
				</select>
			}
		>
			<div className="analytics-card wide">
				<ContestRatingChart data={dataTimePeriod} />
			</div>
		</Section>
	);
}
