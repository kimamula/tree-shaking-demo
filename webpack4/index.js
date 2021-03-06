const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const StringReplacePlugin = require("string-replace-webpack-plugin");

const entry = Object.assign.apply(null, [
  'import-from-lodash',
  'import-from-lodash-es',
  'import-from-lodash-es-specify-path',
  'import-from-rxjs'
].map(file => ({ [file]: `./src/${file}.ts` })));

webpack({
  entry,
  output: {
    path: path.resolve(__dirname),
    filename: `[name].js`
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          StringReplacePlugin.replace({ replacements: [{
            pattern: /\/\*\* @class \*\//g,
            replacement: () => '/*@__PURE__*/'
          }]}),
          'awesome-typescript-loader'
        ]
      }
    ]
  },
  optimization: {
    minimizer: [new UglifyJsPlugin({ uglifyOptions: { compress: {
      passes: 3,
      pure_funcs: ['Promise.resolve']
    } } })]
  },
  plugins: [
    new StringReplacePlugin()
  ]
}, (err, stats) => {
  if (err) {
    console.error(err);
    return process.exit(1);
  }
  if (stats.hasErrors()) {
    stats.compilation.errors.forEach(err => console.error(err));
    return process.exit(1);
  }
});
