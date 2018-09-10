define("sprites/Spritesheet",["Config"],function(Config){
	class Spritesheet{
		
		
		/**
		 * Responsible for controlling where in spritesheet sprite should render.<br>
		 * Currently, constructor serves as the factory for producing various types of sprites.<br>
	 	 * Sprite is tightly coupled to this.<br>
	 	 * TODO - move factory elsewhere<br>
		 * TODO - move load functions/enum into YAML format and abstract away the need to code
		 * @param {string} spriteSheetToLoad - enum of spritesheet you want to load. 
		 */
		constructor(spriteSheetToLoad){
			
			/**@readonly
			 * @member  {Object} Spritesheet#image*/
			this.image;
			
			/**@private
			 * @member {Boolean} Spritesheet#hasFacing */
			this.hasFacing;
			
			/**@readonly
			 * @member {Integer} Spritesheet#row
			 * row of spritesheet sprite is on */
			this.row;
			
			/**@readonly
			 * @member {Integer} Spritesheet#frameWidth*/
			this.frameWidth;
			
			/** @readonly
			 * @member {Integer} Spritesheet#frameHeight*/
			this.frameHeight;
			
			/**@readonly
			 * @member {Integer} Spritesheet#frameIndex*/
			this.frameIndex;
			
			/**@private
			 * @member {Integer} Spritesheet#frameLimit*/
			this.frameLimit;
			
			/**@private
			 * @member {Array} Spritesheet#frameMap */
			this.frameMap;
			
			/** @private
			 * @member {Integer} Spritesheet#frameMapIndex*/
			this.frameMapIndex;
			
			/**@readonly
			 * @member {Integer} Spritesheet#collisionModX*/
			this.collisionModX;
			
			/**@readonly
			 * @member {Integer} Spritesheet#collisionModY*/
			this.collisionModY;
			
			/**@readonly 
			 * @member {Integer} Spritesheet#collisionWidth*/
			this.collisionWidth;
			
			/**@readonly 
			 * @member {Integer} Spritesheet#collisionHeight */
			this.collisionHeight;
			
			/** @readonly
			 * @member {Dictionary} Spritesheet#rowKeyDict
			 * Maps the spritesheet row to a key (for player controlled sprites)*/
			this.rowKeyDict;
			
			/**@readonly
			 * @member {Dictionary} Spritesheet#keyRowDict
			 * Maps the spritesheet key to a row (for player controlled sprites) */
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
		speech1(){
			this.image = new Image()
			this.image.src = "misc/speech-bubble.png"
			this.hasFacing = false
			this.row = 0
			this.frameWidth = 500
			this.frameHeight = 500
			this.frameIndex = 0
			this.frameLimit = 2
			this.collisionModX = 4
			this.collisionModY=-18
			this.collisionWidth = 50
			this.collisionHeight = 25
		}
		/** @function Spritesheet#setRowByKey */
		setRowByKey(key){
			this.row = this.keyRowDict[key]
		}
		/**@function Spritesheet#setRowByKey*/
		getKeyByRow(row){
			return this.rowKeyDict[row]
		}
		/** @function Spritesheet#hasKey */
		hasKey(key){
			if (key in this.keyRowDict){
				return true
			}
			else{
				return false
			}
		}
		/** @function Spritesheet#checkResetFrame*/
		checkResetFrame(){
			if (this.frameMapIndex==this.frameLimit){
				this.frameIndex = 0
				this.frameMapIndex=0
			}
		}
		/** @function Spritesheet#iterateFrame */
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
