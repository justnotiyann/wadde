/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*.html"],
    darkMode: 'class',
    theme: {
        fontFamily: {
            'poppins': ["Poppins", " sans-serif"],
        },
        extend: {
            colors: {
                primary: {
                    black: "#181C39",
                    brand: "#F15757",
                    dark: {
                        100: "#3E3428",
                        200: '#282828'
                    },
                    gray: "#9ca3af",
                    blue: "#1560F2"
                }
            }
        },
    },
    plugins: [],
}
