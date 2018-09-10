define (function(){

    var pFrameRate = 50,
        pbgHeight = 5000,
        pbgWidth = 5000,
        psprites = [],
        pdebug = false,
        spritesheetFilePath ="spritesheets/";
    	

    return {
           frameRate: pFrameRate,
           bgHeight : pbgHeight,
           bgWidth : pbgWidth,
           debug: pdebug,
           spritesheetFilePath: spritesheetFilePath

    };
});
