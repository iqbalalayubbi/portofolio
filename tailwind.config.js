/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                bg: "#1B264F",
                primary: "#274690",
                text: "#F5F3F5",
                disabled: "#808080",
            },
        },
    },
    plugins: [],
};
