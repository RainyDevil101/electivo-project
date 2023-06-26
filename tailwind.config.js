/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./src/**/*.{html, js, ts, vue}",
        "./src/**/*",
        // "./node_modules/flowbite/**/*.js"
    ],
    theme: {
        colors: {
            'primary': '#2b2d42ff',
            'secondary': '#8d99aeff',
            'lightGray': '#edf2f4ff',
            'redPantone': '#ef233cff',
            'fireEngineRed': '#d90429ff',
        },
        extend: {
            height: {
                'lat-bar': 'calc(100vh - 100px)',
            },
            margin: {
                'lat-bar': '84px'
            },
            width: {
                'min-width': '380px'
            },
            gridTemplateColumns: {
                'fill-40': 'repeat(auto-fill, 3fr)',
              },
        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
}

