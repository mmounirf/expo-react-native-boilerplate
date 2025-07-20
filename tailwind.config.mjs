import nativewindPreset from 'nativewind/preset'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{js,ts,tsx}'],
  presets: [nativewindPreset],
  theme: {
    extend: {},
  },
  plugins: [],
}
