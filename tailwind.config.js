const colors = require('tailwindcss/colors')

module.exports = {
	purge: ['./pages/**/*.js', './components/**/*.js'],
	darkMode: 'media', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				yellow: colors.yellow,
				teal: colors.teal,
				cyan: colors.cyan,
				lightBlue: colors.lightBlue,
				blueGray: colors.blueGray,
				gold: '#ffd700',
				lightYellow: {
					50: '#fffde7',
					100: '#fff9c4',
					200: '#fff59d',
					300: '#fff176',
					400: '#ffee58',
					500: '#ffea00',
					600: '#ffeb3b',
					700: '#fdd835',
					800: '#ffca28',
					900: '#c7a500',
				},
			},
			backgroundOpacity: {
				5: '0.05',
				10: '0.1',
				20: '0.2',
				30: '0.3',
				40: '0.4',
				50: '0.5',
				60: '0.6',
				70: '0.7',
				80: '0.8',
				90: '0.9',
				95: '0.95',
			},
			borderRadius: ['hover', 'focus'],
			borderWidth: ['hover', 'focus'],
		},
	},
	variants: {
		extend: {
			backgroundOpacity: [
				'responsive',
				'group-hover',
				'focus-within',
				'hover',
				'focus',
				'active',
			],
		},
	},
	plugins: [],
}
