export default function Section({ title, eyebrow, children, action }) {
	return (
		<section className="section-block">
			<div className="section-heading">
				<div>
					{eyebrow && <p>{eyebrow}</p>}
					<h2>{title}</h2>
				</div>
				{action}
			</div>
			{children}
		</section>
	);
}
