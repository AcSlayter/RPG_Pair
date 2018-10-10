define(['jquery'], function($){
    $(document).keydown(function(e) {
        console.log("key Pressed:" + e.which);

      e.preventDefault(); // prevent the default action (scroll / move caret)
    });

  return {};
});