import {
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	ReferenceArea,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

export default function ContestRatingChart({ data }) {
	const formatData = data.map((item) => ({
		...item,
		ratingUpdateTime: new Date(
			item.ratingUpdateTimeSeconds * 1000,
		).toLocaleDateString(),
	}));

	const maxRating = Math.max(...data.map((item) => item.newRating));
	const yAxisMax = Number.isFinite(maxRating)
		? Math.ceil(maxRating / 100) * 100 + 200
		: 1600;

	if (!data.length) {
		return <div className="tag-list empty">No rated contest data in this time range.</div>;
	}

	return (
		<div className="chart-scroll">
			<div className="chart-canvas">
				<ResponsiveContainer width="100%" height={400}>
					<LineChart
						data={formatData}
						margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
					>
						<ReferenceArea y1={0} y2={1199} fill="#e5e7eb" fillOpacity={0.55} alwaysShow />
						<ReferenceArea y1={1200} y2={1399} fill="#bbf7d0" fillOpacity={0.55} alwaysShow />
						<ReferenceArea y1={1400} y2={1599} fill="#a5f3fc" fillOpacity={0.55} alwaysShow />
						<ReferenceArea y1={Math.min(1600, yAxisMax)} y2={Math.min(1899, yAxisMax)} fill="#bfdbfe" fillOpacity={0.55} alwaysShow />
						<ReferenceArea y1={Math.min(1900, yAxisMax)} y2={Math.min(2099, yAxisMax)} fill="#e9d5ff" fillOpacity={0.55} alwaysShow />
						<ReferenceArea y1={Math.min(2100, yAxisMax)} y2={Math.min(2399, yAxisMax)} fill="#fed7aa" fillOpacity={0.55} alwaysShow />
						<ReferenceArea y1={Math.min(2400, yAxisMax)} y2={yAxisMax} fill="#fecaca" fillOpacity={0.55} alwaysShow />

						<CartesianGrid stroke="#dce3ee" strokeDasharray="3 3" />
						<XAxis dataKey="ratingUpdateTime" />
						<YAxis domain={[0, yAxisMax]} />
						<Tooltip />
						<Legend />

						<Line
							type="monotone"
							dataKey="newRating"
							stroke="#0f766e"
							strokeWidth={3}
							dot={{ stroke: "#0f766e", strokeWidth: 2 }}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
