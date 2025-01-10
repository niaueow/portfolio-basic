/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				primary: "#A2D2FF",
				secondary: "#313131",
				tertiary: "#252525",
			},
		},
	},
	plugins: [require("daisyui")],
};
