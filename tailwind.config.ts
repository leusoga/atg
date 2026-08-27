import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Obsidian & Amber Theme
        'primary-bg': '#0f1419',
        'secondary-bg': '#1a1f29',
        'tertiary-bg': '#252b38',
        'primary-text': '#f0f1f3',
        'secondary-text': '#b4b8c1',
        'accent-primary': '#f59e0b',
        'accent-secondary': '#fbbf24',
        'accent-light': '#fcd34d',
        'border-color': '#3d444f',
      },
      backgroundImage: {
        'gradient-obsidian': 'linear-gradient(135deg, #1a1f29 0%, #252b38 100%)',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#f0f1f3',
            a: {
              color: '#f59e0b',
              '&:hover': {
                color: '#fbbf24',
              },
            },
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
