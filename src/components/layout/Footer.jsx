import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export default function Footer() {
	return (
		<footer className="site-footer">
			<div>
				<strong>AYUSH RAJ</strong>
				<span>Competitive programming analytics</span>
			</div>
			<div className="footer-links">
				<a href="https://github.com/Ayushraj6202" target="_blank" rel="noreferrer">
					<GitHubIcon fontSize="small" /> GitHub
				</a>
				<a
					href="https://www.linkedin.com/in/ayush-raj-469737246/"
					target="_blank"
					rel="noreferrer"
				>
					<LinkedInIcon fontSize="small" /> LinkedIn
				</a>
				<a href="mailto:ayush2101ce@gmail.com">
					<MailOutlineIcon fontSize="small" /> Email
				</a>
			</div>
		</footer>
	);
}
