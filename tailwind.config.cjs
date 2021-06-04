const { fontFamily } = require( 'tailwindcss/defaultTheme' );

module.exports = {
  mode: "jit",
  purge: [
    "./src/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ...fontFamily,
        'sans': ['Roboto', 'ui-sans-serif', 'system-ui'],
      }
    },
  },
  plugins: [],
};
