/**
 * Created with JetBrains PhpStorm.
 * User: evgenii
 * Date: 24.09.12
 * Time: 8:39
 * To change this template use File | Settings | File Templates.
 */
function getCost(){
    var nKurs=document.getElementsByName("nKurs");
    var time=document.getElementsByName("time");
    var lang=document.getElementsByName("lang");
    var otch=document.getElementsByName("otchet");
    var res=getCostElement(nKurs,55500)+getCostElement(time,31300)+getCostElement(lang,1500)+getCostElement(otch,22300);
    document.write("Результирующая стоимость:",res," руб");
}
function getCostElement(elem,startC){
    for(var i=0;i<elem.length;i++){
        if(elem[i].checked){
            return (i+1)*startC;
        }
    }
    return parseInt(startC/2);
}