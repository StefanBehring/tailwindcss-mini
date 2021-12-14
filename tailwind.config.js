module.exports = {
	content: [],
	darkMode: 'class',
	theme: {
		debugScreens: {
			position: ['top', 'left'],
		},
		extend: {
			fontFamily: {
				ueberschrift: ['Oswald'],
			},
			colors: {
				hauptfarbe: '#212f49',
			},
		},
	},
	plugins: [require('tailwindcss-debug-screens')],
	purge: {
		enabled: true,
		content: ['./dist**/*.html'],
	},
}
