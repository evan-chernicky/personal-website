module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    fontSize: {
      'sm': 'clamp(.6rem, 1vw, .8rem)',
      'md': 'clamp(.7rem, 1.5vw, 1.125rem)',
      'lg': 'clamp(.75rem, 1.75vw, 1.125rem)',
      'xl': 'clamp(.9rem, 2vw, 1.25rem)',
      '2xl': 'clamp(1.15rem, 2.5vw, 1.5rem)',
      '3xl': 'clamp(1.25rem, 3vw, 1.875rem)',
      '4xl': 'clamp(1.5rem, 4vw, 2.25rem)',
      '5xl': 'clamp(1.75rem, 5vw, 3rem)',
      '6xl': 'clamp(2rem, 6vw, 4rem)',
      '7xl': 'clamp(2.5rem, 6.5vw, 4.5rem)'
    },
    extend: {
      colors: {
        black: '#1E1E1E',
        pink: '#ff00ff',
        blue: '#00ffff'
      },
    },
  },
  plugins: [
  ],
  
}