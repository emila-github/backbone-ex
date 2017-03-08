var _ = require('underscore')
	, $ = require('jquery')
	, Backbone = require('backbone')

module.exports = Backbone.Model.extend({
	defaults: {
		part1: 'hello',
		part2: 'world'
	}
})