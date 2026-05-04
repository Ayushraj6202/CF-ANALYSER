import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function ProfileStrip({ userName }) {
	return (
		<div className="profile-strip">
			<div>
				<p>Analysing</p>
				<h2>{userName}</h2>
			</div>
			<a
				href={`https://codeforces.com/profile/${userName}`}
				target="_blank"
				rel="noreferrer"
			>
				Open profile <OpenInNewIcon fontSize="small" />
			</a>
		</div>
	);
}
