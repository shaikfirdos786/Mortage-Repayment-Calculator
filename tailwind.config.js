export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    colors: {
        'custom-focus': 'hsl(61, 70%, 52%)',
      },
  },
  variants: {
    extend: {
      ringColor: ['focus'], // Optional: if you are using ring utility
      borderColor: ['focus'], // Optional: if you are changing border color on focus
      textColor: ['focus'], // Optional: if you are changing text color on focus
    },
  },
};
export const plugins = [];
