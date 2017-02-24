'use strict'

const glob = require('glob')
const path = require('path')
const watch = require('gulp-watch')

const environmentDirectoryMaps = {
  development: 'to-server'
, staging: 'to-preview'
, production: 'to-cdn'
}

function createFileMatch(fileTypes) {
  fileTypes = fileTypes.join(',')
  return `./**/*.{${fileTypes}}`
}

function compileSassWithEnvironment(gulp, environment) {
  var srcRoot = path.join(__dirname, '../', 'source')
    , buildRoot = path.join(
        __dirname, '../', 'build', environmentDirectoryMaps[environment]
      )
    , commonMonitorFileTypes = [
        'css', 'swf'
      , 'eot', 'ttf', 'woff'
      , 'png', 'jpg', 'jpeg', 'gif', 'ico'
      ]

  if (environment === 'development') {
    return () => {
      let source = path.join(srcRoot , createFileMatch(
        commonMonitorFileTypes.concat(['html', 'shtml', 'pug'])
      ))

      return gulp.src(source)
        .pipe(watch(source))
        .pipe(gulp.dest(buildRoot))
    }
  }

  return () => {
    let source = path.join(srcRoot, createFileMatch(commonMonitorFileTypes))

    return gulp.src(source).pipe(gulp.dest(buildRoot))
  }
}

module.exports = compileSassWithEnvironment
