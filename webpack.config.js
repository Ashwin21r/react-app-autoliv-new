import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __dirname = path.resolve();

export default {
    context: __dirname,
    entry: './src/main.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
            filename: 'index.html'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    }
};
