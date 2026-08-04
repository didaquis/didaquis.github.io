import { education } from '../data/education'

const Education = () => (
	<section className="full-width-section" aria-labelledby="education-heading">
		<h2 id="education-heading">Education</h2>
		{education.map(({ course, institution, year, description }) => (
			<article key={course}>
				<h3><span aria-hidden="true">📚</span>{` ${course}`}</h3>
				<h4>{institution}<span>{` (${year})`}</span></h4>
				<p>{description}</p>
			</article>
		))}
	</section>
)

export default Education
