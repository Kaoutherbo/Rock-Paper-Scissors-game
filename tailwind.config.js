/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          'scissors-start': 'hsl(39, 89%, 49%)',
          'scissors-end': 'hsl(40, 84%, 53%)',
          'paper-start': 'hsl(230, 89%, 62%)',
          'paper-end': 'hsl(230, 89%, 65%)',
          'rock-start': 'hsl(349, 71%, 52%)',
          'rock-end': 'hsl(349, 70%, 56%)',
          'lizard-start': 'hsl(261, 73%, 60%)',
          'lizard-end': 'hsl(261, 72%, 63%)',
          'cyan-start': 'hsl(189, 59%, 53%)',
          'cyan-end': 'hsl(189, 58%, 57%)',
        },
        neutral: {
          'dark-text': 'hsl(229, 25%, 31%)',
          'score-text': 'hsl(229, 64%, 46%)',
          'header-outline': 'hsl(217, 16%, 45%)',
        },
        background: {
          'radial-start': 'hsl(214, 47%, 23%)',
          'radial-end': 'hsl(237, 49%, 15%)',
        },
      },
      fontFamily: {
        'barlow-semi-condensed': ['Barlow Semi Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
