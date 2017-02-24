'use strict'

const glob = require("glob")
const path = require('path')
const urlJoin = require('urljoin')
const sass = require('gulp-sass')
const bourbon = require('node-bourbon').includePaths
const pkg = require('../package.json')

const environmentDirectoryMaps = {
  development: 'to-server'
, staging: 'to-preview'
, production: 'to-cdn'
}

function compileSassWithEnvironment(gulp, environment) {
  var srcRoot = path.join(__dirname, '../', 'source')
    , buildRoot = path.join(
        __dirname, '../', 'build', environmentDirectoryMaps[environment]
      )

  return () => {
    let source = path.join(srcRoot, './css/') + '/**/*.{sass, scss}'
      , dest = path.join(buildRoot, 'css/')
      , cdnPrefixer = urlJoin('http://ue.17173cdn.com', pkg['ued.cdnPath'])
      , getUrl = (imgPath) => {
          let environmentAndUrls = {
              production: () => {
                return urlJoin(cdnPrefixer, imgPath)
              }
            , staging: () => {
                return urlJoin(pkg['ued.previewPath'], imgPath)
              }
            , development: () => {
                return urlJoin('/', imgPath)
              }
            }

          return environmentAndUrls[environment]()
        }

    let compile = () => {
      gulp.src(source)
        .pipe(sass({
          includePaths: bourbon
        , functions: {
            'image-url($img)': function(img) {
              var cdnPrefixer = urlJoin('ue.17173cdn.com', pkg['ued.cdnPath'])
                , url = getUrl(img.getValue())

              return new sass.compiler.types.String(
                'url(' + url + ')'
              )
            }
          }
        }).on('error', sass.logError))
        .pipe(gulp.dest(dest))
    }

    compile()

    if (environment === 'development') {
      gulp.watch('source/**/*.{sass, scss}', () => {
        compile()
      })
    }
  }
}

module.exports = compileSassWithEnvironment
