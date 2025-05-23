# Webpack 5 Boilerplate

Sensible webpack 5 boilerplate using Babel, PostCSS and Sass with a hot dev server and an optimized production build.

Last updated: 07-05-2025

Node Version: 22.15.0

# Usage

# Installing

- Make sure you have a new version of Node installed
- Download the code by zip or fork
- Run the command npm install by the command promt

# Development server:

- npm start
- You can view the development server at `localhost:8080`.

# Production build:

- npm run build

# To view the build use http-server:
- npm prod


# Features

- [webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Sass](https://sass-lang.com/)
- [PostCSS](https://postcss.org/)

# Dependencies

# webpack

- [`webpack`](https://github.com/webpack/webpack) - Module and asset bundler.
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Command line interface for webpack
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Development server for webpack
- [`webpack-merge`](https://github.com/survivejs/webpack-merge) - Simplify development/production configuration

# Babel

- [`@babel/core`](https://www.npmjs.com/package/@babel/core) - Transpile ES6+ to ES5
- [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - Smart defaults for Babel
- [`@babel/plugin-transform-runtime`](https://babeljs.io/docs/en/babel-plugin-transform-runtime) - Babel to use async/await
- [`@babel/plugin-proposal-object-rest-spread`](https://babeljs.io/docs/en/plugin-proposal-object-rest-spread) - Babel helper
- [`@babel/plugin-transform-arrow-functions`](https://babeljs.io/docs/en/plugin-transform-arrow-functions) - For arrow functions
- [`@babel/plugin-transform-async-to-generator`](https://babeljs.io/docs/en/plugin-transform-async-to-generator) - Generator for async/await
- [`@babel/plugin-proposal-class-properties`](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) - Use properties on a class


# Some Loaders 

- [`babel-loader`](https://webpack.js.org/loaders/babel-loader/) - Transpile files - Babel/webpack
- [`sass-loader`](https://webpack.js.org/loaders/sass-loader/) - Load SCSS and compile to CSS
- [`node-sass`](https://github.com/sass/node-sass) - Node Sass
- [`postcss-loader`](https://webpack.js.org/loaders/postcss-loader/) - Process CSS with PostCSS
- [`postcss-preset-env`](https://www.npmjs.com/package/postcss-preset-env) - Default for PostCSS
- [`css-loader`](https://webpack.js.org/loaders/css-loader/) - Resolve CSS imports
- [`style-loader`](https://webpack.js.org/loaders/style-loader/) - Inject CSS into the DOM

# Plugins

- [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin) - Remove/clean build folders
- [`copy-webpack-plugin`](https://github.com/webpack-contrib/copy-webpack-plugin) - Copy files to build directory
- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - Generate HTML files from template
- [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) - Extract CSS into separate files
- [`css-minimizer-webpack-plugin`](https://webpack.js.org/plugins/css-minimizer-webpack-plugin/) - Optimize and minimize CSS assets
- [`cross-env`](https://github.com/kentcdodds/cross-env) - Cross platform configuration
- [`http-server`](https://www.npmjs.com/package/http-server) - HTTP server for testing the produktion build by running npm run prod


# Author

- Per Olsen

# License

This project is open source and available under the [MIT License](LICENSE).
