/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				rubik: ["Rubik", "sans-serif"],
			},
			colors: {
				primary: "#3c0876",
				secondary: "#ce4a7eff",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
