import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
	return (
		<Html lang="en">
			<Head>
				<link rel="stylesheet" href="/assets/normalize.css" />
				<link rel="stylesheet" href="/assets/main.css" />
				<link rel="stylesheet" href="/assets/font-awesome-4.7.0/css/font-awesome.min.css" />
				<link rel="stylesheet" href="/assets/typography/roboto-mono.css" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}