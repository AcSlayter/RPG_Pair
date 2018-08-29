define("Sprite",["Spritesheet"],function(Spritesheet){

	return class Sprite {
		constructor(containerId,spritesheet){
			
			//initialize and render sprite
			this.spriteSheet = spritesheet
			var me = this
			this.spriteSheet.image.onload = function(){
				me.render()
			}
			
			//initialize containing elements
			this.container = document.getElementById(containerId)
			this.canvas = document.createElement("canvas")
			this.context = this.canvas.getContext("2d")
			this.container.style.width = this.spriteSheet.width+"px";
			this.container.style.height = this.spriteSheet.height+"px";
			this.canvas.width = this.spriteSheet.width;
			this.canvas.height = this.spriteSheet.height;
			this.container.appendChild(this.canvas)

			//initialize some variables
			this.movement = []
			this.x = 0
			this.y = 0
			this.frameRate = frameRate
		}
		render(){
			this.context.clearRect(0,0,this.spriteSheet.width,this.spriteSheet.height)
			this.context.drawImage(
					this.spriteSheet.image,
					this.spriteSheet.frameIndex*(this.spriteSheet.width),
					this.spriteSheet.row*this.spriteSheet.height,
					this.spriteSheet.width,
					this.spriteSheet.height,
					0,
					0,
					this.spriteSheet.width,
					this.spriteSheet.height
			)
			
		}
		animate(){
			var me = this
			me.render()
			clearInterval(me.animation)
			this.animation = setInterval(function(){
				if (me.spriteSheet.frameIndex==me.spriteSheet.frameLimit){
					me.spriteSheet.frameIndex = 0
				}
				me.render()
				me.spriteSheet.frameIndex++
			},frameRate)
		}
		stopAnimate(){
			clearInterval(this.animation)
		}
		moveHeld(dir,mod){
			var me = this
			me.movement[dir] = setInterval(function(){
				me.move(dir,mod)
			},frameRate)
		}
		stopMove(dir){
			clearInterval(this.movement[dir])
		}
		setFacing(dir){
			this.spriteSheet.prevRow = this.spriteSheet.row
			this.spriteSheet.row = this.spriteSheet.facingDict[dir]
		}
		revertFacing(){
			this.spriteSheet.row = this.spriteSheet.prevRow
			return 
		}
		move(dir,mod){
			if (dir=="S"){
				var y = this.y+mod
				if ( y < bgHeight ){
					this.y= y
					this.container.style.top = this.y+"px"
				}
			}
			else if (dir=="W"){
				var y = this.y-mod
				if ( y > 0 ){
					this.y= y
					this.container.style.top = this.y+"px"
				}
			}
			else if (dir=="A"){
				var x = this.x-mod
				if (x > 0){
					this.x= x
					this.container.style.left = this.x+"px"
				}
			}
			else if (dir=="D"){
				var x = this.x+mod
				if (x < bgWidth){
					this.x= x
					this.container.style.left = this.x+"px"
				}
			}
			
		}
		handleKeyPress(){
			var me = this
			
			me.keySet = new Set()
			$(document).keydown(function(event){
				var key = String.fromCharCode(event.which)
				
				if (!me.keySet.has(key)){
					me.keySet.add(key)
					me.setFacing(key)
					me.render()
					me.animate()
					me.moveHeld(key,10)
				}
				
				console.log("Press",key)
				
				
			})
			$(document).keyup(function(event){
				var key = String.fromCharCode(event.which)
				console.log("Release",key)
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
				
			})
		}
		
		
	}
})