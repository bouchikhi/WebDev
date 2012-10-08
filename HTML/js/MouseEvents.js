/**
 * Created by IntelliJ IDEA.
 * User: Evgeniy
 * Date: 08.10.12
 * Time: 8:22
 * To change this template use File | Settings | File Templates.
 */
function selectText(){

    window.status="Выделять-то можно, копировать – нельзя!";
}
function zoomImg(img){
    img.className="bigImg";
}
function generateNumber(){
    alert("Ваше число:"+Math.round(Math.random()*5));
}
function changeBackground(){
    if(document.body.bgColor=="silver")
    document.body.bgColor="red";
    else
    document.body.bgColor="silver";
}
function copyText(){
    alert("Информация на данном сайте строго конфиденциальна, разглашению и копированию не подлежит!");
    return false;
}