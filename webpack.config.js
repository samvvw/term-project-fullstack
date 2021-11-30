const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const BundleAnalyzerPlugin =
    require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: './client/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.m?js$/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    // test
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Fullstack Term Project',
            template: 'client/index.html',
        }),
        new ESLintPlugin({
            extensions: ['.js', '.jsx'],
            exclude: ['node_modules', 'public', 'server/tests/*'],
        }),
        new BundleAnalyzerPlugin({ analyzerMode: 'json' }),
    ],
    devServer: {
        compress: true,
        historyApiFallback: true,
        open: true,
        client: {
            overlay: {
                errors: true,
                warnings: false,
            },
        },
        port: 3000,
        proxy: {
            '/api': 'http://localhost:8080',
        },
        watchFiles: {
            paths: 'client/**/*',
        },
    },
}
