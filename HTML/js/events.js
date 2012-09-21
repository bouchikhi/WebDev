/**
 * Created by IntelliJ IDEA.
 * User: Evgeniy
 * Date: 02.09.12
 * Time: 1:28
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function(){
    $("#btn").click(function(){
        $("elements").addClass("roundDiv");
        var newElem=$("<div></div>");
        var newParElem=$("<p></p>");
        newParElem.text($("#text").val());
        newElem.append(newParElem);
        newElem.addClass("roundDiv");
        $("body").prepend(newElem);
        $(this).val("d");
    })
});


