define("sprites/MovableSprite",["sprites/Sprite","Conductor", "Config"],function(Sprite,Conductor,Config){
	
	return class MovableSprite extends Sprite{
		constructor(width,height,containerId,spritesheet){
			super(width,height,containerId,spritesheet)
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
			this.spriteSheet.prevRow = this.spriteSheet.row
			this.spriteSheet.row = this.spriteSheet.facingList[dir]
		}
		move(dir,mod){
			var revert = {xOld:this.x,yOld:this.y}
			if (dir==this.spriteSheet.facingDict[0]){
				var y = this.y+mod
				if ( y < Config.bgHeight ){
					this.setYPos(y)
				}
			}
			else if (dir==this.spriteSheet.facingDict[1]){
				var y = this.y-mod
				if ( y > 0 ){
					this.setYPos(y)
				}
			}
			else if (dir==this.spriteSheet.facingDict[2]){
				var x = this.x-mod
				if (x > 0){
					this.setXPos(x)
				}
			}
			else if (dir==this.spriteSheet.facingDict[3]){
				var x = this.x+mod
				if (x < Config.bgWidth){
					this.setXPos(x)
				}
			}
			this.calcExtrema()
			if (Conductor.hasCollision(this)){
				this.setXPos(revert.xOld)
				this.setYPos(revert.yOld)
			}
			
		}
		handleKeyPress(){
			var me = this
			
			me.keySet = new Set()
			$(document).keydown(function(event){
				var key = String.fromCharCode(event.which)
				if (key in me.spriteSheet.facingList){
					if (!me.keySet.has(key)){
						me.keySet.add(key)
						me.setFacing(key)
						me.render()
						me.animate()
						me.moveHeld(key,10)
					}
				}
				
				console.log("Press",key)
				
				
			})
			$(document).keyup(function(event){
				var key = String.fromCharCode(event.which)
				if (key in me.spriteSheet.facingList){
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
				
				console.log("Release",key)
				
			})
		}
		spawn(x,y){
			this.teleport(x,y)
			this.loadImage()
			this.handleKeyPress()
			
		}
	}
	
})