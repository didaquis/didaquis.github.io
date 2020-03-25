import Head from 'next/head'

export default () => (
	<Head>
		<title>Dídac García &#8226; Web developer</title>
		<link rel="apple-touch-icon" href="/favicon.png" sizes="254x254" />
		<link rel="icon" sizes="20x20 32x32 48x48 64x64 128x128 254x254" href="/favicon.ico" />
		<link rel="icon" sizes="254x254" href="/favicon.png" />

		<link rel="stylesheet" href="/assets/normalize.css" />
		<link rel="stylesheet" href="/assets/main.css" />
		<link rel="stylesheet" href="/assets/font-awesome-4.7.0/css/font-awesome.min.css" />
		<link rel="stylesheet" href="/assets/typography/roboto-mono.css" />

		<link rel="canonical" href="https://didaquis.github.io" />

		<meta name="author" content="Dídac García" />
		<meta name="description" content="Web developer" />

		{
			// Open Graph tags
		}
		<meta property="og:type" content="website" />
		<meta property="og:title" content="Dídac García &#8226; Web developer" />
		<meta property="og:url" content="https://didaquis.github.io" />
		<meta property="og:image" content="https://didaquis.github.io/images/portrait.jpg" />
		<meta property="og:description" content="My name is Dídac and I'm a full stack web developer" />
		<meta property="og:site_name" content="Dídac García &#8226; Web developer" />

		{
			// Twitter Card tags
		}
		<meta name="twitter:card" content="summary" />
		<meta name="twitter:title" content="Dídac García &#8226; Web developer" />
		<meta name="twitter:site" content="didaquis" />
		<meta name="twitter:url" content="https://didaquis.github.io" />
		<meta name="twitter:description" content="My name is Dídac and I'm a full stack web developer" />
		<meta name="twitter:image:src" content="https://didaquis.github.io/images/portrait.jpg" />
	</Head>
)
