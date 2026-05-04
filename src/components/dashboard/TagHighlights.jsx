import { getTopTags } from "../../helpers/analytics.js";

export default function TagHighlights({ data }) {
	const topTags = getTopTags(data);

	if (!topTags.length) {
		return <div className="tag-list empty">No accepted tagged problems yet.</div>;
	}

	return (
		<div className="tag-list">
			{topTags.map(([tag, count]) => (
				<div className="tag-pill" key={tag}>
					<span>{tag}</span>
					<strong>{count}</strong>
				</div>
			))}
		</div>
	);
}
