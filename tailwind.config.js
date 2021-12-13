module.exports = {
	content: [],
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
}
