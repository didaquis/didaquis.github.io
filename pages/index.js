import { Fragment } from 'react'
import Header from '../components/Header'
import MyCard from '../components/MyCard'
import AboutMe from '../components/AboutMe'
import WorkHistory from '../components/WorkHistory'
import Education from '../components/Education'
import DailyPuzzle from '../components/DailyPuzzle'

const Home = () => (
	<Fragment>
		<Header />
		<div className="content">
			<MyCard />
			<main>
				<AboutMe />
				<WorkHistory />
				<Education />
				<DailyPuzzle />
			</main>
		</div>
	</Fragment>
)

export default Home
