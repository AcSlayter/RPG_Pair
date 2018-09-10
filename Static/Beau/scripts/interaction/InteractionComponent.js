define("interaction/InteractionComponent",function(){
	
	return class InteractionComponent{
		constructor(sprite, key){
			this.key = key
			this.sprite = sprite
		}
		_handleKeyPress(){
			throw "Attempted to call _handleKeyPress from abstract class"
		}
	}
	
	
	
})