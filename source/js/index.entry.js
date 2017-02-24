var mod = require('./mod')
  , $ = require('jquery')
  , introTmpl = require('./intro.handlebars')

$(function() {
  $('body').append(introTmpl())
})
