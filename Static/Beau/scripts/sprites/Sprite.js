define("sprites/Sprite",["sprites/Spritesheet","Config"],function(Spritesheet, Config){

	return class Sprite {
		//spriteSheet
		//container
		//canvas
		//isLoaded
		//x
		//y
		//width
		//height
		//frameRate
		constructor(containerId,spritesheet){
			//initialize sprite
			this.spriteSheet = spritesheet

			
			//initialize containing elements
			this.container = document.getElementById(containerId)
			this.canvas = document.createElement("canvas")
			this.context = this.canvas.getContext("2d")
			this.container.style.width = this.spriteSheet.frameWidth+"px";
			this.container.style.height = this.spriteSheet.frameHeight+"px";
			this.canvas.width = this.spriteSheet.frameWidth;
			this.canvas.height = this.spriteSheet.frameHeight;
			this.container.style.position = "fixed"
			this.container.appendChild(this.canvas)


			//initialize some variables
			this.isLoaded = false
			this.collision = true
			this.x = 0
			this.y = 0
			if (Config.debug==true){
				this.outline = document.createElement("div")
				this.outline.style.position = "fixed"
				this.outline.style.border = "3px solid black"
				this.outline.zIndex = "9999"
				
			}
			this._calcExtrema()
			if (Config.debug==true){
				this.container.appendChild(this.outline)
			}

			this.frameRate = Config.frameRate
		}
		teleport(x,y){
			if (x != null){
				this._setXPos(x)
			}
			if (y != null){
				this._setYPos(y)
			}
			this._calcExtrema()
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
				
				me.spriteSheet.checkResetFrame()
				me.render()
				me.spriteSheet.iterateFrame()
			},this.frameRate)
		}
		stopAnimate(){
			clearInterval(this.animation)
		}
		_calcExtrema(){
			this.extrema = {
					"minX":(this.x+this.spriteSheet.collisionModX),
					"maxX":(this.x+this.spriteSheet.collisionModX)+(this.spriteSheet.collisionWidth),
					"minY":(this.y+this.spriteSheet.collisionModY),
					"maxY":(this.y+this.spriteSheet.collisionModY)+(this.spriteSheet.collisionHeight)
			}
			if (Config.debug == true){
				this.outline.style.width = (this.extrema.maxX-this.extrema.minX) +"px"
				this.outline.style.height = (this.extrema.maxY-this.extrema.minY) +"px"
				this.outline.style.top = this.extrema.minY +"px"
				this.outline.style.left = this.extrema.minX +"px"
			}
		}
		_setXPos(x){
			if (typeof(x)!="number"){
				throw "Attempted to set x position with invalid data type|"+typeof(x)+"|"+x
			}
			this.x = x
			this.container.style.left = x+"px"	

		}
		_setYPos(y){
			if (typeof(y)!="number"){
				throw "Attempted to set x position with invalid data type|"+typeof(y)+"|"+y
			}
			this.y = y
			this.container.style.top = y+"px"

		}
		_loadImage(){
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
			this._loadImage()
			this._calcExtrema()
			
		}
		validate(){
			if (this.spriteSheet ==null||this.container==null||this.canvas==null||this.isLoaded==null||this.x==null||this.y==null||this.frameRate==null){
				throw "Sprite invalid - missing required element"
			}
			this.spriteSheet.validate()
			
		}
		
		
	}
})