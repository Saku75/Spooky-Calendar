module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{css,png,ico,js,html,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};