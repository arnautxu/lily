/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--bg) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        sand: 'rgb(var(--sand) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        'ink-soft': 'rgb(var(--ink-soft) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        'accent-ink': 'rgb(var(--accent-ink) / <alpha-value>)',
        coral: 'rgb(var(--coral) / <alpha-value>)',
        success: 'rgb(var(--success) / <alpha-value>)',
      },
      fontFamily: {
        display: ['"Fraunces Variable"', 'Georgia', 'serif'],
        sans: ['"Geist Variable"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '78rem',
      },
      borderRadius: {
        sm: 'var(--r-sm)',
        md: 'var(--r-md)',
        lg: 'var(--r-lg)',
        xl: 'var(--r-xl)',
        '2xl': 'var(--r-2xl)',
      },
      boxShadow: {
        soft: '0 1px 2px rgb(var(--ink) / 0.05), 0 18px 40px -22px rgb(var(--ink) / 0.18)',
        lift: '0 28px 60px -28px rgb(var(--accent) / 0.32)',
        diffuse: '0 20px 50px -20px rgb(var(--ink) / 0.10)',
        'inset-hi': 'inset 0 1px 0 rgb(255 255 255 / 0.6)',
      },
      fontSize: {
        mega: ['clamp(2.8rem, 1.4rem + 6vw, 6rem)', { lineHeight: '0.98', letterSpacing: '-0.03em' }],
        display: ['clamp(2.4rem, 1.6rem + 3.6vw, 4rem)', { lineHeight: '1.02', letterSpacing: '-0.025em' }],
        h2: ['clamp(1.9rem, 1.3rem + 2.2vw, 3rem)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        h3: ['clamp(1.25rem, 1.1rem + 0.6vw, 1.6rem)', { lineHeight: '1.18', letterSpacing: '-0.01em' }],
      },
      transitionTimingFunction: {
        'out-soft': 'cubic-bezier(0.22, 1, 0.36, 1)',
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        marquee: 'marquee 36s linear infinite',
        float: 'float 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
