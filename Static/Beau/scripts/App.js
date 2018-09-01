define(["sprites/Sprite","sprites/MovableSprite","sprites/Spritesheet","Conductor"], function (Sprite,MovableSprite,Spritesheet,Conductor){
   var initialize = function(){
      console.log("Enter App");
       // Pass in our Router module and call it's initialize function
        testSprite = new MovableSprite(50,50,"sprite-container-1",new Spritesheet("warrior1"))
        Conductor.addSprite(testSprite)

        testSprite2 = new MovableSprite(50,50,"sprite-container-2",new Spritesheet("warrior2"))
        Conductor.addSprite(testSprite2)

        testSprite.spawn(10,10)
        testSprite2.spawn(300,300)
        Conductor.renderAllSprites()
     }

    return {
        initialize : initialize
    }

});