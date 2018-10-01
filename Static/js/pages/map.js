define(['jquery'], function($){

    function writeArrayToDom(width, array){
        var x = 0 , y = 0;
        var domObjects = "";

        for (var index_x = 1 ; index_x <= width  ; index_x++){
            domObjects = domObjects.concat("<div class=\"row\">");
            for (var index_y = 1 ; index_y <= width  ; index_y++){
                var value = array[(index_x*index_y)-1].nodeType
                domObjects = domObjects.concat("<div class=\"square "+ value +"\">" + value + "</div>");

            }
            domObjects = domObjects.concat("</div>");
        }
        $("#map").append(domObjects)
    }

    function handleResponse(data){
        console.log(data);
        var chunk = data.currentLocation.current;
        var width = chunk.width;
        var array = chunk.nodeSet
        writeArrayToDom(width, array);
    }

    function getJson(){
        var generate_url = "/api/mapBoard/test" ;
        $.ajax({
            dataType: 'json',
            url: generate_url,
            cache: false,
            success: function(data){
                 handleResponse(data)
            }
        });

    }

    getJson()

  return {};
});