/**
 * Created by IntelliJ IDEA.
 * User: Evgeniy
 * Date: 16.09.12
 * Time: 15:36
 * To change this template use File | Settings | File Templates.
 */
var socket=new WebSocket("ws://localhost:8081/");
$(document).ready(function(){
    socket.onmessage=function(msg){
        alert(msg);
    };
    socket.onopen=function(){
        success_connect();
    };
    socket.onclose=function(){
        error_connect();
    };
});

function getUserMessage(){
    var message=$("#user_message").val();
    $("#user_message").val("");
    return message;
}
function success_connect(){
    $("#parent_item").removeClass("parent_bord_error");
    $("#parent_item").addClass("parent_bord_ok");
}
function error_connect(){
    $("#parent_item").removeClass("parent_bord_ok");
    $("#parent_item").addClass("parent_bord_error");
}
function sendMessage(){
    var message=getUserMessage();
    if(message.length>0){
        socket.send(message);
    }
}
