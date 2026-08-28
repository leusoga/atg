import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-obsidian': 'linear-gradient(135deg, #1a1f29 0%, #252b38 100%)',
      },
    },
  },
  plugins: [],
}
export default config
