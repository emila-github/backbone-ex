'use strict'

const gulp = require('gulp')
const path = require('path')
const utils = require('./configs/utils')(gulp)

utils.loadTasks(
  [ [ require('./configs/sass'), 'compile-sass']
  , [ require('./configs/webpack'), 'compile-javascript']
  , [ require('./configs/copy-static'), 'copy-static']
  ]
)

;[
  ['for-ued-server', 'development']
, ['for-ued-preview', 'staging']
, ['for-ued-build', 'production']
].forEach((tuple) => {
  let taskName = tuple[0]
    , environment = tuple[1]

  gulp.task(taskName, () => {
    utils.runTasks(
        [ 'compile-sass'
        , 'compile-javascript'
        , 'copy-static' ]
      , environment)
  })
})

gulp.task('default', () => {
  utils.listCommands()
})
