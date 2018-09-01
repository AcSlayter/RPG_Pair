define("sprites/Sprite",["sprites/Spritesheet"],function(Spritesheet){

	return class Sprite {
		constructor(width,height,containerId,spritesheet){
			//initialize sprite
			spritesheet.validate()
			this.spriteSheet = spritesheet

			
			//initialize containing elements
			this.container = document.getElementById(containerId)
			this.canvas = document.createElement("canvas")
			this.context = this.canvas.getContext("2d")
			this.container.style.width = this.spriteSheet.frameWidth+"px";
			this.container.style.height = this.spriteSheet.frameHeight+"px";
			this.canvas.width = this.spriteSheet.frameWidth;
			this.canvas.height = this.spriteSheet.frameHeight;
			this.container.appendChild(this.canvas)

			//initialize some variables
			this.isLoaded = false
			this.collision = true
			this.x = 0
			this.y = 0
			this.width = width
			this.height = height
			this.calcExtrema()
			this.frameRate = frameRate
		}
		teleport(x,y){
			if (x != null){
				this.setXPos(x)
			}
			if (y != null){
				this.setYPos(y)
			}
			this.calcExtrema()
		}
		render(){
			this.context.clearRect(0,0,this.spriteSheet.frameWidth,this.spriteSheet.frameHeight)
			this.context.drawImage(
					this.spriteSheet.image,
					this.spriteSheet.frameIndex*(this.spriteSheet.frameWidth),
					this.spriteSheet.row*this.spriteSheet.frameHeight,
					this.spriteSheet.frameWidth,
					this.spriteSheet.frameHeight,
					0,
					0,
					this.spriteSheet.frameWidth,
					this.spriteSheet.frameHeight
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
		calcExtrema(){
			this.extrema = {
					"minX":this.x,
					"maxX":this.x+this.width,
					"minY":this.y,
					"maxY":this.y+this.height
			}
		}
		setXPos(x){
			if (typeof(x)!="number"){
				throw "Attempted to set x position with invalid data type|"+typeof(x)+"|"+x
			}
			this.x = x
			this.container.style.left = x+"px"	
		}
		setYPos(y){
			if (typeof(y)!="number"){
				throw "Attempted to set x position with invalid data type|"+typeof(y)+"|"+y
			}
			this.y = y
			this.container.style.top = y+"px"
		}
		loadImage(){
			var me = this
			//Need to be able to render all sprites when this is done
			this.spriteSheet.image.onload = function(){
				this.isLoaded = true
				//me.render()
			}
		}
		spawn(x,y){
			this.teleport(x,y)
			var me = this
			this.loadImage()
			
		}
		
		
	}
})