const colors = require("tailwindcss/colors");

module.exports = {
        purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
        darkMode: false, // or 'media' or 'class'
        theme: {
                extend: {
                        spacing: {
                                108: "27rem",
                                128: "32rem",
                                136: "34rem",
                                144: "36rem",
                                148: "37rem",
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
                        blue: colors.blue,
                },
        },
        variants: {
                extend: {},
        },
        plugins: [],
};
