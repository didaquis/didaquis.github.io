import { jobs } from '../data/jobs'

const WorkHistory = () => (
	<section className="full-width-section" aria-labelledby="work-history-heading">
		<h2 id="work-history-heading">Work History</h2>
		{jobs.map(({ company, dates, role, sector, description, stack }) => (
			<article key={company}>
				<h3><span aria-hidden="true">🛠</span>{` ${company} `}<span className="date">{`(${dates})`}</span></h3>
				<h4 className="role">{role} · <span className="sector">{sector}</span></h4>
				<p>{description}</p>
				<div className="stack">
					<span className="stack-label">Stack</span>
					<ul className="stack-list">
						{stack.map((tech) => (
							<li key={tech}>{tech}</li>
						))}
					</ul>
				</div>
			</article>
		))}
	</section>
)

export default WorkHistory
