const DailyPuzzle = () => (
	<section className="full-width-section puzzle-section" aria-labelledby="puzzle-heading">
		<h2 id="puzzle-heading">Puzzle of the day</h2>
		<p className="puzzle-intro">I told you I play chess. Here&apos;s today&apos;s puzzle: your move.</p>
		<iframe
			className="puzzle-frame"
			src="https://lichess.org/training/frame?theme=brown&bg=dark"
			title="Lichess puzzle of the day"
			loading="lazy"
		/>
	</section>
)

export default DailyPuzzle
