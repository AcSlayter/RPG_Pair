// Filename: router.js

define(['jquery','helpers/KeyPress'], function($,KeyPress){

  var initialize = function(){
        console.log("Enter Router.js");

        var current_page = window.location.pathname;
        console.log(current_page);

        switch(current_page){
            case "/" :
                console.log("something");
                break;
            case "/index.html" :
                console.log("something 2 ");
                break;
            default:
                console.log("fail");
        }

  };
  return {
    initialize: initialize
  };
});