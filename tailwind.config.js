/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./src/**/*.{html, js, ts, vue}",
        "./src/**/*"
    ],
    theme: {
        colors: {
            'primary': '#2b2d42ff',
            'secondary': '#8d99aeff',
            'lightGray': '#edf2f4ff',
            'redPantone': '#ef233cff',
            'fireEngineRed': '#d90429ff',
        },
        extend: {},
    },
    plugins: [],
}

