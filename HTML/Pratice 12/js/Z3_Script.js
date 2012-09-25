/**
 * Created with JetBrains PhpStorm.
 * User: evgenii
 * Date: 24.09.12
 * Time: 8:19
 * To change this template use File | Settings | File Templates.
 */
function changeLine(){
    var line=document.getElementById("line");
    var newSize=document.getElementById("newSize").value;
    var leftShift=document.getElementById("Shift1").checked;
    var rightShift=document.getElementById("Shift2").checked;
    var centerShift=document.getElementById("Shift3").checked;
    line.setAttribute('width',newSize);
    if(leftShift){
        line.align="Left";
    }
    else if(rightShift){
        line.align="Right";
    }
    else
    line.align="Center";
}