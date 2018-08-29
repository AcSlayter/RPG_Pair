// Filename: main.js

//configure shortcut alias
require.config({
  paths: {
    jquery: 'lib/jquery.min',
  }
});
// Load app module and pass it to our definition function
require(['app'], function(App){
  // The "app" dependency is passed in as "App"
  App.initialize();
});