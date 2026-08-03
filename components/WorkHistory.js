import { jobs } from '../data/jobs'

const WorkHistory = () => (
	<section className="full-width-section">
		<h2>Work History</h2>
		{jobs.map(({ company, dates, role, description }) => (
			<article key={company}>
				<h3><span aria-hidden="true">🛠</span>{' ' + company + ' '}<span>{'(' + dates + ')'}</span></h3>
				<h4>{role}</h4>
				<p>{description}</p>
			</article>
		))}
	</section>
)

export default WorkHistory
