/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: 'oklch(var(--bg) / <alpha-value>)',
        'bg-deep': 'oklch(var(--bg-deep) / <alpha-value>)',
        surface: 'oklch(var(--surface) / <alpha-value>)',
        sand: 'oklch(var(--sand) / <alpha-value>)',
        ink: 'oklch(var(--ink) / <alpha-value>)',
        'ink-soft': 'oklch(var(--ink-soft) / <alpha-value>)',
        accent: 'oklch(var(--accent) / <alpha-value>)',
        'accent-ink': 'oklch(var(--accent-ink) / <alpha-value>)',
        coral: 'oklch(var(--coral) / <alpha-value>)',
        success: 'oklch(var(--success) / <alpha-value>)',
        pine: 'oklch(var(--pine) / <alpha-value>)',
        'pine-soft': 'oklch(var(--pine-soft) / <alpha-value>)',
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['Satoshi', 'system-ui', 'sans-serif'],
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
        soft: 'inset 0 1px 0 oklch(var(--ink) / 0.06), 0 20px 50px -25px oklch(0 0 0 / 0.55)',
        lift: '0 28px 60px -28px oklch(var(--accent) / 0.25)',
        diffuse: '0 30px 60px -30px oklch(0 0 0 / 0.5)',
        'inset-hi': 'inset 0 1px 0 oklch(var(--ink) / 0.08)',
      },
      fontSize: {
        mega: ['clamp(3.2rem, 1.6rem + 7vw, 7.5rem)', { lineHeight: '0.95', letterSpacing: '-0.015em' }],
        display: ['clamp(2.6rem, 1.6rem + 4vw, 4.6rem)', { lineHeight: '1.0', letterSpacing: '-0.01em' }],
        h2: ['clamp(2rem, 1.4rem + 2.4vw, 3.4rem)', { lineHeight: '1.05', letterSpacing: '-0.01em' }],
        h3: ['clamp(1.3rem, 1.15rem + 0.6vw, 1.7rem)', { lineHeight: '1.18', letterSpacing: '-0.005em' }],
      },
      transitionTimingFunction: {
        'out-soft': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
