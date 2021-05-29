const colors = require("tailwindcss/colors");

module.exports = {
        purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
        darkMode: false, // or 'media' or 'class'
        theme: {
                extend: {
                        width: {
                                136: "34rem",
                        },
                },
                fontFamily: {
                        sans: ["Helvetica", "Arial", "sans-serif"],
                },
                colors: {
                        transparent: "transparent",
                        current: "currentColor",
                        black: colors.black,
                        white: colors.white,
                        gray: colors.trueGray,
                        indigo: colors.indigo,
                        red: colors.rose,
                        amber: colors.amber,
                },
        },
        variants: {
                extend: {},
        },
        plugins: [],
};
