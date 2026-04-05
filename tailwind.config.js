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
        midnight: '#1A237E',
        royal: '#4C2FCF',
        teal: '#00A896',
        purple: '#9D4EDD',
        amber: '#FFB627',
        cloud: '#F4F6FA',
        graphite: '#111827',
        ink: '#060816',
        glow: '#8AA3FF',
      },
      boxShadow: {
        float:
          '0 20px 50px rgba(5, 8, 22, 0.25), 0 6px 18px rgba(5, 8, 22, 0.18)',
        glow:
          '0 0 0 1px rgba(255,255,255,0.03), 0 12px 28px rgba(5, 8, 22, 0.20)',
        'glow-strong':
          '0 0 0 1px rgba(255,255,255,0.05), 0 20px 45px rgba(5, 8, 22, 0.25)',
        glass:
          'inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(255,255,255,0.03)',
      },
      backgroundImage: {
        'grid-dark':
          'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
        'grid-light':
          'linear-gradient(rgba(17,24,39,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(17,24,39,0.06) 1px, transparent 1px)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
