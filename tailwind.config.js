/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                libreBaskerville: 'Libre Baskerville'
            },
            dropShadow: {
                'glow-yellow-500': '0 0px 5px rgba(234, 179, 8, 0.5)',
                'glow-aoc-star': '0 0px 5px rgba(255, 255, 102, 0.5)',
                'glow-white': '0 0px 5px rgba(255, 255, 255, 0.5)'
            },
            colors: {
                aoc: {
                    lighter: '#35357a',
                    light: '#2a2a60',
                    medium: '#1d1d43',
                    dark: '#0f0f23',
                    code: '#10101a',
                    text: '#cccccc',
                    link: '#009900',
                    star: '#ffff66'
                }
            }
        }
    },
    plugins: [
        require('tailwind-scrollbar')({ nocompatible: true })
    ]
};
