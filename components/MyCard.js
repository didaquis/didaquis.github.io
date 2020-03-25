export default () => (
	<header>
		<div className="logo-container">
			<span className="logo"></span>
		</div>
		<div className="author-container"><h1>Dídac García</h1></div>
		<div className="tagline-container"><p>Web developer</p></div>
		<hr />
		<ul className="fa-ul main-list">
			<li className="main-list-item">
				<span className="fa fa-github fa-lg main-list-item-icon"></span>&nbsp;
				<a href="https://github.com/didaquis" target="_blank" title="didaquis on GitHub">Explore my GitHub</a>
			</li>
			<li className="main-list-item">
				<span className="fa fa-twitter fa-lg main-list-item-icon"></span>&nbsp;
				<a href="https://twitter.com/didaquis" target="_blank" title="didaquis on Twitter">Follow me on Twitter</a>
			</li>
			<li className="main-list-item">
				<span className="fa fa-linkedin fa-lg main-list-item-icon"></span>&nbsp;
				<a href="https://www.linkedin.com/in/didac-garcia/" target="_blank" title="didaquis on LinkedIn">Contact me on LinkedIn</a>
			</li>
		</ul>
	</header>
)