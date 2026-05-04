import CodeIcon from "@mui/icons-material/Code";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { QUICK_HANDLES } from "../../constants/quickHandles.js";
import DashboardSearch from "../search/DashboardSearch.jsx";

export default function Hero({
	error,
	inputHandle,
	loading,
	onHandleChange,
	onQuickHandle,
	onSubmit,
}) {
	return (
		<section className="hero-section">
			<nav className="topbar">
				<div className="brand-mark">
					<CodeIcon />
					<span>CF Analyser</span>
				</div>
				<a href="https://codeforces.com/" target="_blank" rel="noreferrer">
					Codeforces <OpenInNewIcon fontSize="inherit" />
				</a>
			</nav>

			<div className="hero-grid">
				<div className="hero-copy">
					<p className="eyebrow">Practice and contest analytics</p>
					<h1>Codeforces performance dashboard</h1>
					<p>
						Review solved ratings, contest accuracy, rank movement, and topic
						strength from one clean handle lookup.
					</p>
					<div className="quick-handles">
						{QUICK_HANDLES.map((handle) => (
							<button
								key={handle}
								type="button"
								onClick={() => onQuickHandle(handle)}
							>
								{handle}
							</button>
						))}
					</div>
				</div>

				<DashboardSearch
					value={inputHandle}
					onChange={onHandleChange}
					onSubmit={onSubmit}
					loading={loading}
				/>
			</div>

			{error && <div className="alert-message">{error}</div>}
		</section>
	);
}
