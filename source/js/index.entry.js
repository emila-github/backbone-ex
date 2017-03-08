var mod = require('./mod')
  , $ = require('jquery')
  , introTmpl = require('./intro.handlebars')
  , Ex1 = require('./ex1')
  , Ex2 = require('./ex2')
  , Ex3 = require('./ex3')
  , Ex4 = require('./ex4')
  , Ex5 = require('./ex5')


$(function() {
  // $('body').append(introTmpl())

  new Ex1()
  new Ex2()
  new Ex3()
  new Ex4()
  new Ex5()



})
