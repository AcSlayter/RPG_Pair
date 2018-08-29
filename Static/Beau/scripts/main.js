frameRate = 50
bgHeight = 500
bgWidth = 500
class Sprite {
	constructor(width,height,containerId,imageFilepath){
		//initialize canvas
		this.container = document.getElementById(containerId)
		this.canvas = document.createElement("canvas")
		this.container.style.width = width+"px";
		this.container.style.height = height+"px";
		this.canvas.width = width;
		this.canvas.height = height;
		this.container.appendChild(this.canvas)

		
		this.context = this.canvas.getContext("2d")
		this.width = width
		this.height=height
		this.image = new Image()
		this.x = 0
		this.y = 0
		
		this.spriteSheetRow = 0
		
		this.image.src = imageFilepath
		var me = this
		this.image.onload = function(){
			me.render()
		}
		
		

		this.frameIndex = 0
		this.frameLimit = 6
		this.frameRate = frameRate
	}
	render(){
		this.context.clearRect(0,0,this.width,this.height)
		this.context.drawImage(
				this.image,
				this.frameIndex*(this.width),
				this.spriteSheetRow*this.height,
				this.width,
				this.height,
				0,
				0,
				this.width,
				this.height
		)
		
	}
	animate(){
		var me = this
		me.render()
		clearInterval(me.animation)
		this.animation = setInterval(function(){
			if (me.frameIndex==me.frameLimit){
				me.frameIndex = 0
			}
			me.render()
			me.frameIndex++
		},frameRate)
	}
	stopAnimation(){
		clearInterval(this.animation)
	}
	moveHeld(dir,mod){
		var me = this
		me.movement = setInterval(function(){
			me.move(dir,mod)
		},frameRate)
	}
	stopMove(){
		clearInterval(this.movement)
	}
	move(dir,mod){
		if (dir=="S"){
			var y = this.y+mod
			if ( y < bgHeight ){
				this.y= y
				this.spriteSheetRow=0
				this.container.style.top = this.y+"px"
			}
		}
		else if (dir=="W"){
			var y = this.y-mod
			if ( y > 0 ){
				this.y= y
				this.spriteSheetRow=1
				this.container.style.top = this.y+"px"
			}
		}
		else if (dir=="A"){
			var x = this.x-mod
			if (x > 0){
				this.x= x
				this.spriteSheetRow=2
				this.container.style.left = this.x+"px"
			}
		}
		else if (dir=="D"){
			var x = this.x+mod
			if (x < bgWidth){
				this.x= x
				this.spriteSheetRow=3
				this.container.style.left = this.x+"px"
			}
		}
		
	}
	
}


var testSprite = new Sprite(150,120,"sprite-container-1","spritesheets/example3.png")
keySet = new Set()
$(document).keydown(function(event){
	var key = String.fromCharCode(event.which)
	if (!keySet.has(key)){
		
		keySet.add(key)
		testSprite.animate()
		testSprite.moveHeld(key,10)
	}
	
	
})
$(document).keyup(function(event){
	var key = String.fromCharCode(event.which)
	if (keySet.has(key)){
		
		testSprite.stopAnimation()
		testSprite.stopMove()
	}
	keySet.delete(key)
})







