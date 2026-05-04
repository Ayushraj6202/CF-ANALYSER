import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import { BestRank } from "../../Data/ContestVsRank.js";
import { getAccuracy, getUniqueSolvedCount } from "../../helpers/analytics.js";
import StatCard from "../common/StatCard.jsx";

export default function StatsGrid({
	allContestData,
	allContestSubmission,
	allSubmissions,
	selectedValue,
}) {
	const practiceSolved = getUniqueSolvedCount(allSubmissions);
	const contestSolved = getUniqueSolvedCount(allContestSubmission);
	const bestRankLabel = BestRank.rank === 1e5 ? "N/A" : BestRank.rank;

	return (
		<div className="stats-grid">
			<StatCard
				icon={<DoneAllIcon />}
				label="Practice solved"
				value={practiceSolved}
				note={`${getAccuracy(allSubmissions)}% accepted submissions`}
			/>
			<StatCard
				icon={<QueryStatsIcon />}
				label="Contest solved"
				value={contestSolved}
				note={`${getAccuracy(allContestSubmission)}% accepted submissions`}
			/>
			<StatCard
				icon={<EmojiEventsIcon />}
				label="Rated contests"
				value={allContestData.length}
				note={`Best rank: ${bestRankLabel}`}
			/>
			<StatCard
				icon={<AutoGraphIcon />}
				label="Tracked months"
				value={selectedValue}
				note={BestRank.contest}
			/>
		</div>
	);
}
