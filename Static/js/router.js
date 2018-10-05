// Filename: router.js

define(['jquery'], function($){

  var initialize = function(){
        var current_page = window.location.pathname;
        console.log("Enter Router.js : " + current_page);

        switch(current_page){
            case "/" :
                requirejs(['helpers/KeyPress']);
                break;
            case "/index.html" :
                console.log("index 2 ");
                break;
            case "/pages/map.html" :
//                requirejs(['app/pages/map']);
                requirejs(['app/board/temp']);
                break;
            default:
                console.log("fail");
        }

  };
  return {
    initialize: initialize
  };
});