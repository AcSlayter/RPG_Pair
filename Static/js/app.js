// Filename: app.js

// Request router.js
define(['jquery', 'router'], function($, Router){
  var initialize = function(){
   console.log("Enter app.js");
    // Pass in our Router module and call it's initialize function
    Router.initialize();
  }

  return {
    initialize: initialize
  };
});