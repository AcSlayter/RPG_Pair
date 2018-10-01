// Filename: router.js

define(['jquery'], function($){

  var initialize = function(){
        console.log("Enter Router.js");

        var current_page = window.location.pathname;
        console.log(current_page);

        switch(current_page){
            case "/" :
                requirejs(['helpers/KeyPress']);
                console.log("something");
                break;
            case "/index.html" :
                console.log("index 2 ");
                break;
            case "/pages/map.html" :
                console.log("map");
                requirejs(['pages/map']);
                break;
            default:
                console.log("fail");
        }

  };
  return {
    initialize: initialize
  };
});