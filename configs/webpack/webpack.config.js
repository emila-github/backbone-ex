var webpack = require("webpack")
  , path = require("path")

module.exports = function(entries, buildRoot, srcRoot, environment) {
  var entryForWebpack = {}

  entries.forEach(function(item) {
    entryForWebpack[item.relativeFilename] =
        (environment === 'development')
      ? [ 'webpack-dev-server/client?http://localhost:17176/'
        , item.entryPath
        ]
      : item.entryPath
  })

  return {
    entry: entryForWebpack
  , externals: {
      'jquery': 'jQuery'
    }
  , resolve: {
      root: path.join(srcRoot, 'js')
    , alias: {
        '@173js': 'm9js/lib'
      }
    }
  , output: {
      path: buildRoot
    , filename: '[name]'
    }
  , module: {
      loaders: [
        { test: /\.handlebars$/, loader: 'handlebars-loader' }
      ]
    }
  , plugins: [ new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false } })
    ]
  }
}
