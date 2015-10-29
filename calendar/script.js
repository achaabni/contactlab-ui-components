Polymer({
	is: 'calendar-clab',
	properties: {
		label: {
			type: String
		},
		disable: {
			type: Boolean,
			value: false
		},
		inline: {
			type: Boolean,
			value: false
		},
		options: {
			type: Object,
			value: {}
		},
		placeholder: {
			type: String,
		},
	},
	attached: function(){		
		setTimeout(function(){
			this.inline ? rome(this.querySelector('div.inline-cal'), this.options) : rome(this.querySelector('input'), this.options) ;
		}.bind(this),100)
	},
	_dashify: function(label){
		var str = label.replace(' ','-');
		return str.toLowerCase();
	},
	_viewLabel: function(label) {
		if(label.length > 0){
			return true;
		} else {
			return false;
		}
	}
});