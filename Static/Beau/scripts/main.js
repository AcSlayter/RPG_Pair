frameRate = 50
bgHeight = 500
bgWidth = 500
sprites = []
require.config({
	baseUrl: 'scripts',
	paths: {
		sprites: "sprites"
	}
})
define("main",["sprites/Sprite","sprites/MovableSprite","sprites/Spritesheet","Conductor"],function (Sprite,MovableSprite,Spritesheet,Conductor){
	spritesheet = new Spritesheet("warrior1")
	testSprite = new MovableSprite(50,50,"sprite-container-1",spritesheet)
	Conductor.addSprite(testSprite)
	
	spritesheet = new Spritesheet("warrior2")
	testSprite2 = new MovableSprite(50,50,"sprite-container-2",spritesheet)
	Conductor.addSprite(testSprite2)
	
	testSprite.spawn(10,10)
	testSprite2.spawn(300,300)
	Conductor.renderAllSprites()
});










