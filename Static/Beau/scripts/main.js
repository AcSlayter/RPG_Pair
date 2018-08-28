frameRate = 100
class Sprite {
	constructor(width,height,containerId,imageFilepath){
		//initialize canvas
		var container = document.getElementById(containerId)
		var spriteCanvas = document.createElement("canvas")
		container.appendChild(spriteCanvas)
		spriteCanvas.width = width;
		spriteCanvas.height = height;
		
		this.context = spriteCanvas.getContext("2d")
		this.width = width
		this.height=height
		this.image = new Image()
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
				0,
				this.width,
				this.height,
				0,
				0,
				this.width,
				this.height
		)
		console.log(this.frameIndex*this.width)
		
	}
	animate(){
		var me = this
		setInterval(function(){
			if (me.frameIndex==me.frameLimit){
				me.frameIndex = 0
				console.log(me.frameIndex)
			}
			me.render()
			me.frameIndex++
		},frameRate)
	}
	
}



var testSprite = new Sprite(258,290,"sprite-container-1","spritesheets/example2.png")
testSprite.animate()




