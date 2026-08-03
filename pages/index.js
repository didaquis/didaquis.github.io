import { Fragment } from 'react'
import Header from '../components/Header'
import MyCard from '../components/MyCard'
import AboutMe from '../components/AboutMe'
import WorkHistory from '../components/WorkHistory'
import Education from '../components/Education'

const Home = () => (
	<Fragment>
		<Header />
		<div className="content">
			<MyCard />
			<main>
				<AboutMe />
				<WorkHistory />
				<Education />
			</main>
		</div>
	</Fragment>
)

export default Home
