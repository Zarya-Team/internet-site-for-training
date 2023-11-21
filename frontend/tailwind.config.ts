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
          basis:'#F1E1D0'
        }
      }],
  },
  plugins: [require('daisyui')],
}
export default config
