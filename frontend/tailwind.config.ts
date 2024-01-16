import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui:{
    logs: false,
    theme: [
      {
        mytheme:{
          'light-brown':'#F1E1D0'
        }
      }],
  },
  plugins: [require('daisyui')],
}
export default config
