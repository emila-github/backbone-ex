var _ = require('underscore')
	, $ = require('jquery')
	, Backbone = require('backbone')
	, ItemView = require('./itemView')
	, Item = require('./model')
	, List = require('./collection')

module.exports = Backbone.View.extend({
	el: $('.ex4'),
	events: {
		'click button#add': 'addItem'
	},
	initialize: function(){
		_.bindAll(this, 'render', 'addItem', 'appendItem'); // every function that uses 'this' as the current object should be in here

		this.collection = new List();
		this.collection.bind('add', this.appendItem); // collection event binder

		this.counter = 0;
		this.render();
	},
	render: function(){
		var self = this;
		$(this.el).append("<button id='add'>Add list item</button>");
		$(this.el).append("<ul></ul>");
		_(this.collection.models).each(function(item){ // in case collection is not empty
			self.appendItem(item);
		}, this);
	},
	addItem: function(){
		this.counter++;
		var item = new Item();
		item.set({
			part2: item.get('part2') + this.counter // modify item defaults
		});
		this.collection.add(item);
	},
	// `appendItem()` is no longer responsible for rendering an individual `Item`. This is now delegated to the `render()` method of each `ItemView` instance.
	appendItem: function(item){
		var itemView = new ItemView({
			model: item
		});
		$('ul', this.el).append(itemView.render().el);
	}
})