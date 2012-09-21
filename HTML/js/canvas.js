/**
 * Created by IntelliJ IDEA.
 * User: Evgeniy
 * Date: 18.09.12
 * Time: 17:17
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function(){
    expectCanvas("gCanvas");
    drawLine("gCanvas");
});
function expectCanvas(name){
    try{
        document.getElementById(name).getContext("2d");
        alert("Элемент HTML5 Canvas поддерживается");
    }
    catch(e){
        alert("Элемент HTML5 Canvas НЕ поддерживается");
    }
}
function drawLine(canvasId){
    var canvas=document.getElementById(canvasId);
    var context=canvas.getContext("2d");
    context.beginPath();
    context.moveTo(70,140);
    context.lineTo(140,70);
    context.stroke();
    context.save();
    context.translate(70,70);
    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(40,70);
    context.stroke();
    context.restore();

}
