/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/ui/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: ['class', '[data-theme="dark"]'],
	theme: {
		extend: {
			colors: {
				primary: 'var(--primary)',
				background: 'var(--background)',
				textColor: {
					0: 'var(--text-color)',
					1: 'var(--text-color-1)',
					2: 'var(--text-color-2)',
					3: 'var(--text-color-3)',
					4: 'var(--text-color-4)',
				},
			},

			boxShadow: {
				tabBar: '0px -4px 10px var(--shadow-color)',
			},
		},
	},
	plugins: [],
};
