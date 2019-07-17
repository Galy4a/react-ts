const path = require('path');

module.exports = {
    module: {
        rules: [
            {test: /.tsx?$/, use: 'babel-loader'},
            {test: /.scss$/, use: ['style-loader', {
                loader: 'postcss-loader',
                options: {
                    config: {path: path.resolve(__dirname, '..')}
                }
            }]}
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.scss']
    }
};