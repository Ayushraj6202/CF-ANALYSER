import QueryStatsIcon from "@mui/icons-material/QueryStats";
import SearchIcon from "@mui/icons-material/Search";

export default function DashboardSearch({ value, onChange, onSubmit, loading }) {
	return (
		<form className="search-panel" onSubmit={onSubmit}>
			<label className="search-label" htmlFor="Username">
				Codeforces handle
			</label>
			<div className="search-row">
				<div className="search-input-wrap">
					<SearchIcon fontSize="small" />
					<input
						type="text"
						id="Username"
						value={value}
						onChange={(event) => onChange(event.target.value)}
						placeholder="Enter username"
						autoComplete="off"
					/>
				</div>
				<button className="primary-button" type="submit" disabled={loading}>
					<QueryStatsIcon fontSize="small" />
					{loading ? "Analysing" : "Analyse"}
				</button>
			</div>
		</form>
	);
}
