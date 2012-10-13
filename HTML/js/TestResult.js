/**
 * Created by IntelliJ IDEA.
 * User: Evgeniy
 * Date: 13.10.12
 * Time: 9:53
 * To change this template use File | Settings | File Templates.
 */
function getPoint(element){
    if(element[0].checked){
        return 2;
    }
    else if(element[2].checked){
        return 1;
    }
    else if(element[1].checked){
        return 0;
    }
    else{
    alert("ERROR");
        flag=true;
       }
    return 0;
}
var result=0;
var flag=false;
function getResult(){
    var item;
    var name="sel";
    for(var i=1;i<16;i++){
        if(flag){
            break;
        }
        else{
        item=document.getElementsByName(name+(i));
        result+=getPoint(item);
        }
    }
    if(flag==true)
        alert("Ваш результат: "+result+" балла(баллов). Тест пройден не до конца");
    else
    alert("Ваш результат: "+result+" балла(баллов)");
}