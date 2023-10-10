import type { Config } from 'tailwindcss'
import { black, white, transparent } from 'tailwindcss/colors'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  important: true,
  theme: {
    colors: {
      black: 'hsl(var(--black) / <alpha-value>)',
      white: 'hsl(var(--white) / <alpha-value>)',
      transparent,
      gray: {
        DEFAULT: 'hsl(var(--slate-500) / <alpha-value>)',
        50: 'hsl(var(--slate-50) / <alpha-value>)',
        100: 'hsl(var(--slate-100) / <alpha-value>)',
        200: 'hsl(var(--slate-200) / <alpha-value>)',
        300: 'hsl(var(--slate-300) / <alpha-value>)',
        400: 'hsl(var(--slate-400) / <alpha-value>)',
        500: 'hsl(var(--slate-500) / <alpha-value>)',
        600: 'hsl(var(--slate-600) / <alpha-value>)',
        700: 'hsl(var(--slate-700) / <alpha-value>)',
        800: 'hsl(var(--slate-800) / <alpha-value>)',
        900: 'hsl(var(--slate-900) / <alpha-value>)',
        950: 'hsl(var(--slate-950) / <alpha-value>)',
      },
      primary: {
        DEFAULT: 'hsl(var(--blue-600) / <alpha-value>)',
        50: 'hsl(var(--blue-50) / <alpha-value>)',
        100: 'hsl(var(--blue-100) / <alpha-value>)',
        200: 'hsl(var(--blue-200) / <alpha-value>)',
        300: 'hsl(var(--blue-300) / <alpha-value>)',
        400: 'hsl(var(--blue-400) / <alpha-value>)',
        500: 'hsl(var(--blue-500) / <alpha-value>)',
        600: 'hsl(var(--blue-600) / <alpha-value>)',
        700: 'hsl(var(--blue-700) / <alpha-value>)',
        800: 'hsl(var(--blue-800) / <alpha-value>)',
        900: 'hsl(var(--blue-900) / <alpha-value>)',
        950: 'hsl(var(--blue-950) / <alpha-value>)',
      },
    },
  },
}
export default config
