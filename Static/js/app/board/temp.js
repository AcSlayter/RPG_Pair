define(['jquery'], function($) {

    function Title() {
        //tile node
    }


    function chunk_updater () {
        //loads and removed chunks as needed
    }




    function getchunk() {
        //gets chunk from server
    }


    function Chunk  ( max_height, max_width, self) {
        var max_height, max_width, self;

        this.max_height = max_height;
        this.max_width = max_width;
        this.self = self

    }

    function Cord (x,y) {
        var x, y;
        this.x = x;
        this.y = y;

    }

    var selfPosition = new Cord(0,0);
    var chunk = new Chunk (20,20,selfPosition);


    function CurrentInfo (x,y, chunk) {
        var x,y,chunk;

        this.x = x;
        this.y = y;
        this.chunk = chunk;
    }

    function SelectiveMap(currentInfo) {
//        var current_selection = center +- config value

        var currentInfo;

        this.currentInfo = currentInfo;

        SelectiveMap.prototype.getArray = function () {
            return
        }
    }

    var cord = new Cord(0,0)
    var currentInfo = new CurrentInfo(5,5,)
    var SelectiveMap = new SelectiveMap(currentInfo)


});