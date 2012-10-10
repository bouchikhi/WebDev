/**
 * Created by IntelliJ IDEA.
 * User: Evgeniy
 * Date: 10.10.12
 * Time: 12:55
 * To change this template use File | Settings | File Templates.
 */
function changeArea(image){
    var info=document.getElementById("info");
    info.innerHTML="Город: "+image.getAttribute("id")+",время: "+new Date().getHours()+":"+new Date().getMinutes();
}