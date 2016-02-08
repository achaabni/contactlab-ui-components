class TagsClab {

	get behaviors() {
      return [UtilBehavior];
    }

	beforeRegister(){
		this.is = "tags-clab";
		this.properties = {
			label:{
				type:String
			},
			name:{
				type:String,
				value:'tags input'
			},
			inputString:{
				type:String
			},
			disabled:{
				type:Boolean,
				value:false
			},
			stacked:{
				type:Boolean,
				value:false
			},
			tags:{
				type:Array,
				value:[],
				notify:true
			},
			inputType:{
				type:String,
				value:''
			},
			btn:{
				type:String,
				value:'Add'
			},
			btnAppearence:{
				type:String
			},
			btnSize:{
				type:String
			},
			btnIcon:{
				type:String
			},
			hideInput:{
				type:Boolean,
				value:false
			}
		}
	}


	/*----------
	EVENT HANDLERS
	----------*/
	_handleKeyUp(evt){
		switch(evt.keyCode){
			case 188:
			// if comma
				this._addTag(evt);
				break;
			case 13:
			// if enter
				this.querySelector('button-clab').fire('btnclick');
				break;
		}

	}

	_addTag(evt){
		let str=this.inputString.split(',')[0];
		let newTag={
			label:str,
			value:str
		};
		this.push('tags', newTag);
		this.inputString='';

		this.fire('change', {'tags': this.tags, 'new': newTag});
	}

	_removeTag(evt){
		let value=evt.target.getAttribute('value');
		let i;
		this.tags.map((tag, idx)=>{
			if(tag.value===value){
				i=idx;
				return;
			}
		});
		if(i!=undefined) this.splice('tags', i, 1);

		this.fire('change', {'tags': this.tags, 'removed': i});
	}

	_computeStacked(stacked){
		if(stacked){
			return 'selected-values';
		} else {
			return '';
		}
	}



	/*----------
	PUBLIC
	----------*/
	setTags(array){
		if(this.tags.length<0) {
			this.set('tags', array);
		} else {
			array.map(item=>{
				this.push('tags', item);
			});

		}
		this.fire('change', {'tags': this.tags, 'new': array});

		return this.tags;
	}

}


Polymer(TagsClab);
