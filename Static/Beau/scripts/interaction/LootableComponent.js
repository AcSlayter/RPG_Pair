define("interaction/LootableComponent",["interaction/InteractionComponent","Conductor"],function(InteractionComponent,Conductor){
	
	return class LootableComponent extends InteractionComponent{
		constructor(sprite, key){
			super(sprite,key)
			this._handleKeyPress()
		}
		_handleKeyPress(){
			var me = this
			$(document).keydown(function(event){
				var key = String.fromCharCode(event.which)
				if (key ==me.key){
					if (Conductor.hasPlayerNear(me.sprite,0,50,0,0)){
						me.sprite.animateOneFrame()
					}
				}
	
			})
		}
	}
	
	
	
})