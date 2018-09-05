//Singleton

define("Conductor",["Config"],function(Config){
	var sprites = []
	return {
		sprites,
		addSprite: function(sprite){
			sprites.push(sprite)
		},
		hasCollision: function(sprite){

			for (i=0;i<sprites.length;i++){
				var xBad = false
				var yBad = false
				otherSprite = sprites[i]
				if (sprite == otherSprite){
					continue
				}
				if (sprite.extrema.maxX <= otherSprite.extrema.maxX && sprite.extrema.maxX >= otherSprite.extrema.minX){
					xBad = true
				}
				if (sprite.extrema.minX <= otherSprite.extrema.maxX && sprite.extrema.minX >= otherSprite.extrema.minX){
					xBad = true
				}
				if (sprite.extrema.minX <= otherSprite.extrema.minX && sprite.extrema.maxX >= otherSprite.extrema.maxX){
					xBad = true
				}
				if (sprite.extrema.maxY <= otherSprite.extrema.maxY && sprite.extrema.maxY >= otherSprite.extrema.minY){
					yBad = true
				}
				if (sprite.extrema.minY <= otherSprite.extrema.maxY && sprite.extrema.minY >= otherSprite.extrema.minY){
					yBad = true
				}
				if (sprite.extrema.minY <= otherSprite.extrema.minY && sprite.extrema.maxY >= otherSprite.extrema.maxY){
					yBad = true
				}
				if (xBad == true && yBad == true){
					if (Config.debug==true){
						console.log("Sprite: ",sprite.extrema.minX,sprite.extrema.maxX,sprite.extrema.minY,sprite.extrema.maxY)
						console.log("OtherSprite: ",otherSprite.extrema.minX,otherSprite.extrema.maxX,otherSprite.extrema.minY,otherSprite.extrema.maxY)
					}
					return true
				}
			}
			return false
		},
		//Should fix this to wait until all assets are loaded...
		renderAllSprites: function(){
			$(window).on('load',setTimeout(function(){
				for (i=0,len=sprites.length;i<len;i++){
					sprites[i].render()
				};
			},500))
		},
		validateAll: function(){
			for (i=0,len=sprites.length;i<len;i++){
				sprites[i].validate()
			}
		}
		
	}
	
	
	
})
