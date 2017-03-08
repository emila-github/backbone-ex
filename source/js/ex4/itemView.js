var _ = require('underscore')
	, $ = require('jquery')
	, Backbone = require('backbone')

// **ItemView class**: Responsible for rendering each individual `Item`.
module.exports = Backbone.View.extend({
	tagName: 'li', // name of (orphan) root tag in this.el
	initialize: function(){
		_.bindAll(this, 'render'); // every function that uses 'this' as the current object should be in here
	},
	render: function(){
		$(this.el).html('<span>'+this.model.get('part1')+' '+this.model.get('part2')+'</span>');
		return this; // for chainable calls, like .render().el
	}
})