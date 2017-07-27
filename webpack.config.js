const path = require('path')

module.export = {
    entry: "index.js",
    output:{
        path: path.resolve(__dirname, "built"),
        filename: "index.js"
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use:{
                    loader: 'babel-loader',
                    options:{
                        presets: ['env']
                    }
                }
            }
        ]
    },
    target: 'web'
}