define("interaction/DialogueComponent",["interaction/IInteractable","Conductor","sprites/Sprite","sprites/Spritesheet"],function(IInteractable,Conductor,Sprite, Spritesheet){
	
	return class LootableComponent extends IInteractable{
		constructor(sprite, key){
			super(sprite,key)
			this._handleKeyPress()
		}
		_handleKeyPress(){
			var me = this;
			$(document).keydown(function(event){
				var key = String.fromCharCode(event.which);
				if (key ==me.key){
					if (Conductor.hasPlayerNear(me.sprite,0,50,0,0)){
						var id = "dialogue1";
						var mod = 15
						var box = document.getElementById(id);
						if (box!=null){
							document.getElementById("main").removeChild(box);
							return;
						}
						
						box = document.createElement("div");
						box.setAttribute("id",id);
						document.getElementById("main").appendChild(box);
						var boxSprite = new Sprite(id,new Spritesheet("dialogue1"));
				        Conductor.addSprite(boxSprite);
				        boxSprite.spawn(me.sprite.x+me.sprite.spriteSheet.collisionWidth+15, me.sprite.y-me.sprite.spriteSheet.collisionHeight);
				        boxSprite.collision = false;
				        boxSprite.spriteSheet.image.onload = function(){
				        	boxSprite.render()
				        }
				        //Conductor.renderAllSprites();
						//me.sprite.animateOneFrame()
					}
				}
	
			})
		}
	}
	
	
	
})