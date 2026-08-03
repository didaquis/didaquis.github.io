const MyCard = () => (
	<header>
		<div className="logo-container">
			<span className="logo"></span>
		</div>
		<div className="author-container"><h1>Dídac García</h1></div>
		<div className="tagline-container"><p>Senior web developer</p></div>
		<hr />
		<ul className="fa-ul main-list">
			<li className="main-list-item">
				<span className="fa fa-github fa-lg main-list-item-icon"></span>&nbsp;
				<a href="https://github.com/didaquis" target="_blank" rel="noopener noreferrer" title="didaquis on GitHub">Explore my GitHub</a>
			</li>
			<li className="main-list-item">
				<span className="fa fa-linkedin fa-lg main-list-item-icon"></span>&nbsp;
				<a href="https://www.linkedin.com/in/didac-garcia/" target="_blank" rel="noopener noreferrer" title="didaquis on LinkedIn">Contact me on LinkedIn</a>
			</li>
		</ul>
	</header>
)

export default MyCard