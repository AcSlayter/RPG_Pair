
require.config({
	baseUrl: 'scripts',
	paths: {
		sprites: "sprites",
		jquery: 'lib/jquery.min'
	}
})
define("main",["scripts/App.js", "jquery" ],function (App,$){
    $( document ).ready(function() {
	    App.initialize();
	});
});








