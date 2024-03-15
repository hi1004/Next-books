import type { Config } from 'tailwindcss'

type Spacing = Record<string, string>
type FontSize = Record<string, string>
const pxToRem = (px: number, base = 16) => `${px / base}rem`
const range = (start: number, end: number) => {
  return Array.from({ length: end - start + 1 }, (_, index) => start + index)
}

const spacing: Spacing = range(1, 100).reduce((acc, px) => {
  acc[`${px}pxr`] = pxToRem(px)
  return acc
}, {} as Spacing)

const fontSize: FontSize = range(1, 100).reduce((acc, px) => {
  acc[`${px}pxr`] = pxToRem(px)
  return acc
}, {} as FontSize)

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing,
      fontSize,
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
