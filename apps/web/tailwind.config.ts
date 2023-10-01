import type { Config } from 'tailwindcss'

const config: Config = {
  presets: [require('../../libs/ui/tailwind.config')],
  content: ['./src/**/*.{ts,tsx}', '../../libs/ui/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
export default config
