var _ = require('underscore')
	, $ = require('jquery')
	, Backbone = require('backbone')
	, Item = require('./model')

module.exports = Backbone.Collection.extend({
	model: Item
})