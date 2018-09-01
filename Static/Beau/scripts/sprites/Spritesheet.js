define("sprites/Spritesheet",function(){
	
	return class Spritesheet{
		constructor(spriteSheetToLoad){
			if (spriteSheetToLoad == "warrior1"){
				this.warrior1()
			}
			if (spriteSheetToLoad == "warrior2"){
				this.warrior1()
				this.facingDict = { 0:"K", 1:"I", 2:"J", 3:"L"}
				this.facingList = {"K":0,"I":1, "J":2, "L":3}
			}
		}
		warrior1(){
			this.image = new Image()
			this.image.src = "spritesheets/example3.png"
			this.row = 0
			this.frameWidth = 150
			this.frameHeight = 120
			this.frameIndex = 0
			this.frameLimit = 6
			this.facingDict = { 0:"S", 1:"W", 2:"A", 3:"D"}
			this.facingList = {"S":0,"W":1, "A":2, "D":3}
		}
		validate(){
			if (this.image == null||this.image.src==null||this.row==null||this.frameIndex==null||this.frameLimit==null||this.frameWidth==null||this.frameHeight==null||this.facingDict==null){
				throw "Spritesheet invalid - missing required element"
			}
		}
		
	}
	
	
});
