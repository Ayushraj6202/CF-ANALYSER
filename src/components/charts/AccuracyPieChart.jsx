import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const colorPalette = ["#0f766e", "#f97316", "#2563eb", "#7c3aed"];

export default function AccuracyPieChart({ data }) {
	const chartData = Object.values(data).map((value) => ({
		name: value.id,
		value: Number(value.value),
		color: value.color,
	}));

	return (
		<div className="pie-chart-container">
			<ResponsiveContainer width="100%" height="100%">
				<PieChart>
					<Pie
						data={chartData}
						dataKey="value"
						nameKey="name"
						innerRadius={48}
						outerRadius={92}
						paddingAngle={2}
						startAngle={90}
						endAngle={450}
					>
						{chartData.map((entry, index) => (
							<Cell
								key={`cell-${entry.name}`}
								fill={entry.color || colorPalette[index % colorPalette.length]}
							/>
						))}
					</Pie>
					<Tooltip formatter={(value) => `${Number(value).toFixed(2)}%`} />
					<Legend verticalAlign="bottom" height={32} />
				</PieChart>
			</ResponsiveContainer>
		</div>
	);
}
