import type { GatsbyConfig } from 'gatsby';

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

// require('dotenv').config();
const config: GatsbyConfig = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)

  plugins: [`gatsby-plugin-sass`],
  jsxRuntime: `automatic`,
};

export default config;
