var _ = require('underscore')
	, $ = require('jquery')
	, Backbone = require('backbone')
	, Item = require('./model')
	, List = require('./collection')

module.exports = Backbone.View.extend({
	el: $('.ex3'),
	events: {
		'click button#add': 'addItem'
	},
	initialize: function(){
		_.bindAll(this, 'render', 'addItem', 'appendItem'); // remember: every function that uses 'this' as the current object should be in here

		this.collection = new List();
		this.collection.bind('add', this.appendItem); // collection event binder

		this.counter = 0;
		this.render();
	},
	render: function(){
		// Save reference to `this` so it can be accessed from within the scope of the callback below
		var self = this;
		$(this.el).append("<button id='add'>Add list item</button>");
		$(this.el).append("<ul></ul>");
		_(this.collection.models).each(function(item){ // in case collection is not empty
			self.appendItem(item);
		}, this);
	},
	// `addItem()` now deals solely with models/collections. View updates are delegated to the `add` event listener `appendItem()` below.
	addItem: function(){
		this.counter++;
		var item = new Item();
		item.set({
			part2: item.get('part2') + this.counter // modify item defaults
		});
		this.collection.add(item); // add item to collection; view is updated via event 'add'
	},
	// `appendItem()` is triggered by the collection event `add`, and handles the visual update.
	appendItem: function(item){
		$('ul', this.el).append("<li>"+item.get('part1')+" "+item.get('part2')+"</li>");
	}
})