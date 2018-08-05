const path = require('path');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.base');

const config = {
    // Inform webpack that we're building a bundle
    // for Node.js, rather than for browser
    target: 'node',

    // Tell Webpack the root file of our server application
    entry: './src/index.js',

    // Tell Webpack where to put the output file that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
};

module.exports = merge(baseConfig, config);
