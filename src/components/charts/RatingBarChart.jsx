import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";

const valueFormatter = (value) => `${value}`;

const chartSetting = {
	yAxis: [{ label: "Submission Count" }],
	series: [{ dataKey: "count", label: "Rating Vs Count", valueFormatter }],
	height: 300,
	sx: {
		[`& .${axisClasses.directionY} .${axisClasses.label}`]: {
			transform: "translateX(-10px)",
		},
	},
};

export default function RatingBarChart({ dataset }) {
	const transformedDataset = Object.entries(dataset)
		.map(([rating, count]) => ({
			rating: Number(rating),
			count,
		}))
		.sort((a, b) => a.rating - b.rating);

	if (!transformedDataset.length) {
		return <div className="tag-list empty">No accepted rated problems yet.</div>;
	}

	return (
		<div className="chart-scroll">
			<div className="chart-canvas">
				<BarChart
					dataset={transformedDataset}
					xAxis={[
						{
							scaleType: "band",
							dataKey: "rating",
							tickPlacement: "middle",
							tickLabelPlacement: "middle",
						},
					]}
					colors={["#2563eb"]}
					{...chartSetting}
				/>
			</div>
		</div>
	);
}
