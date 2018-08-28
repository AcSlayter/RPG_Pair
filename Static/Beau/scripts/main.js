frameRate = 100
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
		
	}
	animate(){
		var me = this
		setInterval(function(){
			if (me.frameIndex==me.frameLimit){
				me.frameIndex = 0
			}
			me.render()
			me.frameIndex++
		},frameRate)
	}
	move(dir,mod){
		if (dir=="s"){
			var y = this.y+mod
			if ( y < bgHeight ){
				this.y= y
				this.container.style.top = this.y+"px"
			}
		}
		if (dir=="w"){
			var y = this.y-mod
			if ( y > 0 ){
				this.y= y
				this.container.style.top = this.y+"px"
			}
		}
		if (dir=="a"){
			var x = this.x-mod
			if (x > 0){
				this.x= x
				this.container.style.left = this.x+"px"
			}
		}
		if (dir=="d"){
			var x = this.x+mod
			if (x < bgWidth){
				this.x= this.x+mod
				this.container.style.left = this.x+"px"
			}
		}
	}
	
}


var testSprite = new Sprite(258,290,"sprite-container-1","spritesheets/example2.png")
testSprite.animate()
$(document).keypress(function(event){
	var key = String.fromCharCode(event.which)
	console.log(key)
	testSprite.move(key,10)
})




