const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
    //target
    target: 'node',
    //entry point of server
    entry: './server/index.js',
    //output budle path
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'server-build')
    },

    //not to include imported full node module code
    externals: [webpackNodeExternals()],

    module: {
        rules: [
            {
                exclude: [/\.(js|mjs|jsx|scss)$/, /\.html$/, /\.json$/],
                loader: require.resolve('file-loader'),
                options: {
                    name: 'build/static/media/[name].[hash:8].[ext]',
                    publicPath: url => url.replace(/build/, ''),
                },
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: 'css-loader/locals',
            },
            {
                test: /js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: { presets: ['react-app'] },
            },
        ]
    }
};