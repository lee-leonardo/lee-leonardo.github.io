module.exports = {
    entry: "./webpack/entry.js",
    output: {
        path: __dirname + 'assets/js/',
        filename: "bundle.js"
      },
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loader: 'ts-loader',
            query: {
              presets: ["react", "es2015"]
            }
          }
        ]
      },
      mode: 'development' // 'production' // for minified
    };
}