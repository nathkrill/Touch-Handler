module.exports = {
    mode: 'production',
    module: {
        rules: [
            {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: [["@babel/env", {
                        'targets': {
                            'browsers': ['IE 11']
                        }
                    }]],
                    sourceType: 'unambiguous',
                }
            }
            }
        ]
    },
    output: {
        filename: 'touch-handler.js',
    }
};