import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': 'var(--primary-bg)',
        'secondary-bg': 'var(--secondary-bg)',
        'tertiary-bg': 'var(--tertiary-bg)',
        'primary-text': 'var(--primary-text)',
        'secondary-text': 'var(--secondary-text)',
        'accent-primary': 'var(--accent-primary)',
        'accent-secondary': 'var(--accent-secondary)',
        'accent-light': 'var(--accent-light)',
        'border-color': 'var(--border-color)',
      },
      backgroundImage: {
        'gradient-obsidian': 'linear-gradient(135deg, #1a1f29 0%, #252b38 100%)',
      },
    },
  },
  plugins: [],
}
export default config
