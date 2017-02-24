'use strict'

const glob = require("glob")
const path = require('path')
const webpack = require("webpack")
const gutil = require("gulp-util")
const WebpackDevServer = require("webpack-dev-server");

const environmentDirectoryMaps = {
  development: 'to-server'
, staging: 'to-preview'
, production: 'to-cdn'
}

function compileWebpackWithEnvironment(gulp, environment) {
  var srcRoot = path.join(__dirname, '../../', 'source')
    , buildRoot = path.join(__dirname, '../../', 'build'
        , environmentDirectoryMaps[environment])

  return () => {
    let createWebpackConfig = require('./webpack.config.js')
      , noop = function() {}

    var entries =  glob.sync(path.join(srcRoot, './**/*.entry.js'))
      .map((entryPath) => {
        let entryName = path.basename(entryPath, '.entry.js')
          , relativeEntryPath = path.relative(srcRoot, entryPath)

        return {
          name: path.basename(entryPath)
        , relativeFilename: relativeEntryPath
        , entryPath: entryPath
        }
      })

    var configs = createWebpackConfig(entries, buildRoot, srcRoot, environment)

    var compiler = webpack(configs, function(err, stats) {
      if(err) throw new gutil.PluginError("webpack", err)
      gutil.log('[webpack]', stats.toString('normal'))
    })

    if (environment === 'development') {

      new WebpackDevServer(compiler, {
        stats: 'normal'
      }).listen(17176, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err)
        gutil.log("[webpack-dev-server]",
          "http://localhost:17176/webpack-dev-server/index.html")
      })
    } else {
      compiler.run(noop)
    }
  }
}

module.exports = compileWebpackWithEnvironment
