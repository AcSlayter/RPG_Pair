define(["sprites/Sprite","sprites/MovableSprite","sprites/Spritesheet","Conductor"], function (Sprite,MovableSprite,Spritesheet,Conductor){
   var initialize = function(){
      console.log("Enter App");
       // Pass in our Router module and call it's initialize function
        testSprite = new MovableSprite("sprite-container-1",new Spritesheet("warrior1"))
        Conductor.addSprite(testSprite)

        testSprite2 = new MovableSprite("sprite-container-2",new Spritesheet("warrior2"))
        Conductor.addSprite(testSprite2)
        
        chestSprite = new Sprite("sprite-container-3",new Spritesheet("chest1"))
        Conductor.addSprite(chestSprite)
        
        Conductor.validateAll()
        
        testSprite.spawn(10,10)
        testSprite2.spawn(300,300)
        chestSprite.spawn(400,100)
        //chestSprite.frameRate=200
        //chestSprite.animate()
        Conductor.renderAllSprites()
     }

    return {
        initialize : initialize
    }

});