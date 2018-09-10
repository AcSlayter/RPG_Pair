define("sprites/MovableSprite",["sprites/Sprite","Conductor", "Config"],function(Sprite,Conductor,Config){
	var movement
	
	return class MovableSprite extends Sprite{
		//movement
		constructor(containerId,spritesheet){
			super(containerId,spritesheet)
			this.movement = [];
		}
		moveHeld(dir,mod){
			var me = this
			me.movement[dir] = setInterval(function(){
				me.move(dir,mod)
			},this.frameRate)
		}
		stopMove(dir){
			clearInterval(this.movement[dir])
		}
		setFacing(dir){
			this.spriteSheet.setRowByKey(dir)
		}
		move(dir,mod){
			var revert = {xOld:this.x,yOld:this.y}
			if (this.spriteSheet.hasFacing==true){
				this._moveWithFacing(dir,mod)
			}
			else{
				this._moveWithoutFacing(dir,mod)
			}

			this._calcExtrema()
			if (Conductor.hasCollision(this)){
				this._setXPos(revert.xOld)
				this._setYPos(revert.yOld)
			}
			if (Config.debug == true){
				this._calcExtrema()
			}
			
		}
		//These two are the same for now...
		_moveWithoutFacing(dir,mod){
			if (dir==this.spriteSheet.getKeyByRow(0)){
				var y = this.y+mod
				if ( y < Config.bgHeight ){
					this._setYPos(y)
				}
			}
			else if (dir==this.spriteSheet.getKeyByRow(1)){
				var y = this.y-mod
				if ( y > 0 ){
					this._setYPos(y)
				}
			}
			else if (dir==this.spriteSheet.getKeyByRow(2)){
				var x = this.x-mod
				if (x > 0){
					this._setXPos(x)
				}
			}
			else if (dir==this.spriteSheet.getKeyByRow(3)){
				var x = this.x+mod
				if (x < Config.bgWidth){
					this._setXPos(x)
				}
			}
		}
		_moveWithFacing(dir,mod){
			this._moveWithoutFacing(dir,mod)
		}
		_handleKeyPress(){
			var me = this
			
			me.keySet = new Set()
			$(document).keydown(function(event){
				var key = String.fromCharCode(event.which)
				if (me.spriteSheet.hasKey(key)){
					if (!me.keySet.has(key)){
						me.keySet.add(key)
						me.setFacing(key)
						me.render()
						me.animate()
						me.moveHeld(key,10)
					}
				}
				
				//console.log("Press",key)
				
				
			})
			$(document).keyup(function(event){
				var key = String.fromCharCode(event.which)
				if (me.spriteSheet.hasKey(key)){
					if (me.keySet.has(key)){
						
						me.stopAnimate()
						me.stopMove(key)
					}
					me.keySet.delete(key)
					if (me.keySet.size > 0){
						var otherKey = me.keySet.values().next().value
						me.setFacing(otherKey)
						me.render()
						me.animate()
					}
				}
				
				//console.log("Release",key)
				
			})
		}
		spawn(x,y){
			this.teleport(x,y)
			this._loadImage()
			this._handleKeyPress()
			
		}
	}

	
})