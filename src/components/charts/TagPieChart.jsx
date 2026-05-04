import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const colorPalette = [
	"#2563eb",
	"#0f766e",
	"#f97316",
	"#7c3aed",
	"#db2777",
	"#0891b2",
	"#65a30d",
	"#b45309",
];

export default function TagPieChart({ data }) {
	const sortedData = Object.entries(data)
		.map(([key, value]) => ({
			name: key,
			value,
		}))
		.sort((a, b) => b.value - a.value)
		.slice(0, 10);

	return (
		<div className="pie-chart-container">
			<ResponsiveContainer width="100%" height="100%">
				<PieChart>
					<Pie
						data={sortedData}
						dataKey="value"
						nameKey="name"
						innerRadius={46}
						outerRadius={100}
						paddingAngle={2}
						startAngle={90}
						endAngle={450}
					>
						{sortedData.map((entry, index) => (
							<Cell
								key={`cell-${entry.name}`}
								fill={colorPalette[index % colorPalette.length]}
							/>
						))}
					</Pie>
					<Tooltip />
				</PieChart>
			</ResponsiveContainer>
		</div>
	);
}
