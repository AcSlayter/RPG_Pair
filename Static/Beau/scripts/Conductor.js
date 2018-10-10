//Singleton

define("Conductor",["Config"],function(Config){
	var sprites = []
	return {
		addSprite: function(sprite){
			sprites.push(sprite)
		},
		hasNear: function(sprite,restrictFunction,modMaxX,modMaxY,modMinX,modMinY){
			for (i=0;i<sprites.length;i++){
				var xBad = false
				var yBad = false
				otherSprite = sprites[i]
				if (sprite == otherSprite){
					continue;
				}
				if (otherSprite.collision == false){
					continue;
				}
				if (restrictFunction != null){
					if (restrictFunction(otherSprite)==true){
						continue
					}
				}
				if (sprite.extrema.maxX+modMaxX <= otherSprite.extrema.maxX && sprite.extrema.maxX+modMaxX >= otherSprite.extrema.minX){
					xBad = true
				}
				if (sprite.extrema.minX-modMinX <= otherSprite.extrema.maxX && sprite.extrema.minX-modMinX >= otherSprite.extrema.minX){
					xBad = true
				}
				if (sprite.extrema.minX-modMinX <= otherSprite.extrema.minX && sprite.extrema.maxX+modMaxX >= otherSprite.extrema.maxX){
					xBad = true
				}
				if (sprite.extrema.maxY+modMaxY <= otherSprite.extrema.maxY && sprite.extrema.maxY+modMaxY >= otherSprite.extrema.minY){
					yBad = true
				}
				if (sprite.extrema.minY-modMinY <= otherSprite.extrema.maxY && sprite.extrema.minY-modMinY >= otherSprite.extrema.minY){
					yBad = true
				}
				if (sprite.extrema.minY-modMinY <= otherSprite.extrema.minY && sprite.extrema.maxY+modMaxY >= otherSprite.extrema.maxY){
					yBad = true
				}
				if (xBad == true && yBad == true){
					if (Config.debug==true){
						console.log("Sprite: ",sprite.extrema.minX-modMinX,sprite.extrema.maxX+modMaxX,sprite.extrema.minY-modMinY,sprite.extrema.maxY+modMaxY)
						console.log("OtherSprite: ",otherSprite.extrema.minX,otherSprite.extrema.maxX,otherSprite.extrema.minY,otherSprite.extrema.maxY)
					}
					return true
				}
			}
			return false
		},
		hasPlayerNear: function(sprite,modMaxX,modMaxY,modMinX,modMinY){
			return this.hasNear(sprite,function(otherSprite){
				return !otherSprite.isPlayer
			},modMaxX,modMaxY,modMinX,modMinY)
		},
		hasCollision: function(sprite){
			return this.hasNear(sprite,null,0,0,0,0)
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
