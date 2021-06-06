const colors = require("tailwindcss/colors");

module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            spacing: {
                82: "20.5rem",
                100: "25rem",
                108: "27rem",
                120: "30rem",
                128: "32rem",
                136: "34rem",
                144: "36rem",
                148: "37rem",
            },
            keyframes: {
                fadein: {
                    "0%": { opacity: "0", transform: "translateY(-10px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
            },
            animation: {
                "fade-in": "fadein 0.5s ease-out",
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
            blueGray: colors.blueGray,
            coolGray: colors.coolGray,
            cyan: colors.cyan,
            green: colors.green,
            yellow: colors.yellow,
            purple: colors.purple,
        },
    },
    variants: {
        extend: { animation: ["motion-safe"] },
    },
    plugins: [],
};
