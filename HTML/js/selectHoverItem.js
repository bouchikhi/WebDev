/**
 * Created by IntelliJ IDEA.
 * User: Evgeniy
 * Date: 18.09.12
 * Time: 16:34
 * To change this template use File | Settings | File Templates.
 */
function selectHoverElement(){
    var hover=document.querySelector("td:hover");
    if(hover){
        document.getElementById("hoverResult").innerHTML=hover.innerHTML;
    }
}
