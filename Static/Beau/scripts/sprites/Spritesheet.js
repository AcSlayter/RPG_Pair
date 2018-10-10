define("sprites/Spritesheet",["Config"],function(Config){
	class Spritesheet{

		constructor(spriteSheetToLoad){

			this.image;

			this.hasFacing;

			this.row;

			this.frameWidth;

			this.frameHeight;

			this.frameIndex;

			this.frameLimit;
			
			this.frameMap;

			this.frameMapIndex;

			this.collisionModX;

			this.collisionModY;

			this.collisionWidth;

			this.collisionHeight;

			this.rowKeyDict;

			this.keyRowDict;
			
			
			if (spriteSheetToLoad == "warrior1"){
				this.warrior1();
				this.rowKeyDict = { 0:"S", 1:"W", 2:"A", 3:"D"}
                this.keyRowDict = {"S":0,"W":1, "A":2, "D":3}
			}
			if (spriteSheetToLoad == "human1"){
				this.human1();
				this.rowKeyDict = { 0:"S", 1:"W", 2:"A", 3:"D"}
				this.keyRowDict = {"S":0,"W":0, "A":0, "D":0}
			}
			if (spriteSheetToLoad == "warrior2"){
				this.warrior1()
				this.rowKeyDict = { 0:"K", 1:"I", 2:"J", 3:"L"}
				this.keyRowDict = {"K":0,"I":1, "J":2, "L":3}
			}
			if (spriteSheetToLoad == "human2"){
				this.human1()
				this.rowKeyDict = { 0:"K", 1:"I", 2:"J", 3:"L"}
				this.keyRowDict = {"K":0,"I":0, "J":0, "L":0}
			}
			if (spriteSheetToLoad == "chest1"){
				this.chest1()
				this.frameMap = []
				this.frameMap[0] = {row:0,col:0}
				this.frameMap[1]= {row:1,col:1}
				
			}
			if (spriteSheetToLoad == "dialogue1"){
				this.dialogue1()
				
			}
			this.frameMapIndex = 0
		}
		warrior1(){
			this.image = new Image()
			this.image.src = Config.spritesheetFilePath+"example3.png"
			this.hasFacing = true
			this.row = 0
			this.frameWidth = 150
			this.frameHeight = 120
			this.frameIndex = 0
			this.frameLimit = 6
			this.collisionModX = 27
			this.collisionModY=25
			this.collisionWidth = 70
			this.collisionHeight = 70

		}
		human1(){
			this.image = new Image()
			this.image.src = Config.spritesheetFilePath+"PixelatedSprites/Human/human_nude_bald2.png"
			this.hasFacing = false
			this.row = 0
			this.frameWidth = 40
			this.frameHeight = 40
			this.frameIndex = 0
			this.frameLimit = 6
			this.collisionModX = 50
			this.collisionModY= 50
			this.collisionWidth = 50
			this.collisionHeight = 50
		}
		chest1(){
			this.image = new Image()
			this.image.src = Config.spritesheetFilePath+"Doodad/chest1.png"
			
			this.hasFacing = false
			this.row = 0
			this.frameWidth = 64
			this.frameHeight = 64
			this.frameIndex = 0
			this.frameLimit = 2
			this.collisionModX = 4
			this.collisionModY=-18
			this.collisionWidth = 50
			this.collisionHeight = 25
		}
		dialogue1(){
			this.image = new Image()
			this.image.src = Config.spritesheetFilePath+"Misc/speech-bubble.png"
			this.hasFacing = false
			this.row = 0
			this.frameWidth = 130
			this.frameHeight = 110
			this.frameIndex = 0
			this.frameLimit = 0
			this.collisionModX = 4
			this.collisionModY=-18
			this.collisionWidth = 50
			this.collisionHeight = 25
		}
		setRowByKey(key){
			this.row = this.keyRowDict[key]
		}
		getKeyByRow(row){
			return this.rowKeyDict[row]
		}
		hasKey(key){
			if (key in this.keyRowDict){
				return true
			}
			else{
				return false
			}
		}
		checkResetFrame(){
			if (this.frameMapIndex==this.frameLimit){
				this.frameIndex = 0
				this.frameMapIndex=0
			}
		}
		iterateFrame(){
			this.frameMapIndex++
			if (this.frameMap==null){
				this.frameIndex++
			}
			else{
				this.checkResetFrame()
				this.frameIndex = this.frameMap[this.frameMapIndex].col
				this.row = this.frameMap[this.frameMapIndex].row
			}
			

		}
		validate(){
			if (this.image == null||this.image.src==null||this.hasFacing==null||this.row==null||this.frameIndex==null||this.frameLimit==null||this.frameWidth==null||this.frameHeight==null){
				throw "Spritesheet invalid - missing required element"
			}
		}
		
	}
	
	return Spritesheet;
	
	
});
