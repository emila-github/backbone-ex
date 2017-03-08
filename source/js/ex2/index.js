var _ = require('underscore')
	, $ = require('jquery')
	, Backbone = require('backbone')

module.exports = Backbone.View.extend({
	el: $('.ex2'),
	events: {
		'click button#add': 'addItem'
	},
	initialize: function(){
		_.bindAll(this, 'render', 'addItem'); // every function that uses 'this' as the current object should be in here

		this.counter = 0; // total number of items added thus far
		this.render();
	},
	render: function(){
		$(this.el).append("<button id='add'>Add list item</button>");
		$(this.el).append("<ul></ul>");
	},
	// `addItem()`: Custom function called via `click` event above.
	addItem: function(){
		this.counter++;
		$('ul', this.el).append("<li>hello world"+this.counter+"</li>");
	}
})