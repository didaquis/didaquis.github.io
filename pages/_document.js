import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
	return (
		<Html lang="en">
			<Head>
				<link
					rel="preload"
					as="font"
					type="font/woff2"
					href="/assets/typography/roboto-mono/roboto-mono-latin-400-normal.woff2"
					crossOrigin=""
				/>
				<link rel="stylesheet" href="/assets/main.css" />
				<link rel="stylesheet" href="/assets/typography/roboto-mono.css" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}