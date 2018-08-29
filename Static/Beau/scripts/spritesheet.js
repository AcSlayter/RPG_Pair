define("Spritesheet",function(){
	
	return class Spritesheet{
		constructor(width,height,spriteFilepath){
			this.image = new Image()
			this.image.src = spriteFilepath
			this.row = 0
			this.frameIndex = 0
			this.frameLimit = 6
			this.width = width
			this.height = height
			this.facingDict = { "S":0, "W":1, "A":2, "D":3}


		}
		
	}
	
	
});
