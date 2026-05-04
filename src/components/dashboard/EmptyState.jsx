import AutoGraphIcon from "@mui/icons-material/AutoGraph";

export default function EmptyState() {
	return (
		<section className="empty-state">
			<AutoGraphIcon />
			<h2>Enter a handle to unlock the dashboard.</h2>
			<p>
				The app will split practice and live contest submissions, then visualize
				accuracy, ratings, rank progress, and topic coverage.
			</p>
		</section>
	);
}
