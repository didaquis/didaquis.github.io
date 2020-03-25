import Header from '../components/Header'
import MyCard from '../components/MyCard'
import AboutMe from '../components/AboutMe'
import WorkHistory from '../components/WorkHistory'
import Education from '../components/Education'

const Home = () => (
	<React.Fragment>
		<Header />
		<div className="content">
			<MyCard />
			<AboutMe />
			<WorkHistory />
			<Education />
		</div>
	</ React.Fragment>
)

export default Home
