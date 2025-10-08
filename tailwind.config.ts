import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/hooks/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["sans-serif"],
			},
			colors: {
				brand: {
					"1": "var(--brand-1)",
				},
			},
			fontSize: {},
			backgroundImage: {},
			animation: {},
		},
	},
	plugins: [],
} satisfies Config;
