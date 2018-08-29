frameRate = 50
bgHeight = 500
bgWidth = 500


define("main",["Sprite","Spritesheet"],function (Sprite,Spritesheet){
	spritesheet = new Spritesheet(150,120,"spritesheets/example3.png")
	testSprite = new Sprite("sprite-container-1",spritesheet)
	testSprite.handleKeyPress()
});








