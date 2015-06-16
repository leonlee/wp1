var path = require('path');

module.exports = {
        entry: [
        path.resolve(__dirname, 'src/main.jsx')
                ],
        output: {
                path: path.resolve(__dirname, 'build'),
                filename: "bundle.js"
        },
        resolve: {
                extensions: ['', '.js', '.jsx']
        },
        module: {
                loaders: [
                { test: /\.css$/, loader: "style!css"},
                { test: /\.jsx$/, loader: "jsx-loader?harmony"}
                ]
        }
};
