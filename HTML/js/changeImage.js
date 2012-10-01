/**
 * Created by IntelliJ IDEA.
 * User: Evgeniy
 * Date: 01.10.12
 * Time: 8:25
 * To change this template use File | Settings | File Templates.
 */
function change(num){
    var select=document.getElementById("select");
    select.setAttribute("src",num.getAttribute("src"));
    select.setAttribute("class","selectedImg");
}