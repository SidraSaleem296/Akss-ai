/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        white: '#F6F8F8',
        black: '#050607',
        midnight: '#152D35',
        royal: '#0F2026',
        teal: '#B8CBC4',
        purple: '#152D35',
        amber: '#D9DEE2',
        cloud: '#F6F8F8',
        graphite: '#050607',
        ink: '#050607',
        glow: '#B8CBC4',
        silver: '#D9DEE2',
        mist: '#B8CBC4',
        velvet: '#152D35',
        deep: '#0F2026',
        slate: {
          50: '#F6F8F8',
          100: '#F6F8F8',
          200: '#D9DEE2',
          300: '#D9DEE2',
          400: '#B8CBC4',
          500: '#152D35',
          600: '#0F2026',
          700: '#152D35',
          800: '#0F2026',
          900: '#050607',
          950: '#050607',
        },
      },
      boxShadow: {
        float:
          '0 20px 50px rgba(5, 6, 7, 0.18), 0 6px 18px rgba(5, 6, 7, 0.14)',
        glow:
          '0 0 0 1px rgba(246,248,248,0.05), 0 12px 28px rgba(5, 6, 7, 0.18)',
        'glow-strong':
          '0 0 0 1px rgba(246,248,248,0.08), 0 20px 45px rgba(5, 6, 7, 0.26)',
        glass:
          'inset 0 1px 0 rgba(246,248,248,0.18), inset 0 -1px 0 rgba(246,248,248,0.04)',
      },
      backgroundImage: {
        'grid-dark':
          'linear-gradient(rgba(246,248,248,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(246,248,248,0.08) 1px, transparent 1px)',
        'grid-light':
          'linear-gradient(rgba(5,6,7,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(5,6,7,0.06) 1px, transparent 1px)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
