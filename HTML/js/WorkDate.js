/**
 * Created by IntelliJ IDEA.
 * User: Evgeniy
 * Date: 04.10.12
 * Time: 8:11
 * To change this template use File | Settings | File Templates.
 */
function getNedelya(){
    var day=parseInt(document.getElementById("day").value);
    var month=parseInt(document.getElementById("month").value);
    var nedelya=((month-1)*30+day)/7;

    document.write("Номер недели:",Math.ceil(nedelya));
}
function getZodiak(){
    var day=parseInt(document.getElementById("day").value);
    var month=parseInt(document.getElementById("month").value);
    var zod;
    if(day>=21&&month==3 || day<=20 && month==4){
        zod = "Овен";
    }
    else if(day>=21&&month==4 || day<=20 && month==5){
        zod="Телец";
    }
    else if(day>=21&&month==5 || day<=21 && month==6){
        zod="Близнецы";
    }
    else if(day>=22&&month==6 || day<=22 && month==7){
        zod="Рак";
    }
    else if(day>=23&&month==7 || day<=23 && month==8){
        zod="Лев";
    }
    else if(day>=24&&month==8 || day<=23 && month==9){
        zod="Дева";
    }
    else if(day>=24&&month==9 || day<=23 && month==10){
        zod="Весы";
    }
    else if(day>=24&&month==10 || day<=22 && month==11){
        zod="Скорпион";
    }
    else if(day>=23&&month==11 || day<=21 && month==12){
        zod="Стрелец";
    }
    else if(day>=22&&month==12 || day<=20 && month==1){
        zod="Козерог";
    }
    else if(day>=21&&month==1 || day<=20 && month==2){
        zod="Водолей";
    }
    else if(day>=21&&month==2 || day<=20 && month==3){
        zod="Рыбы";
    }
    alert(zod);
}
function TodayTime(){
    var hours=new Date().getHours();
    if(hours>=7 && hours<=8){
        return "Завтрака";
    }
    else if(hours>=13 && hours<=14){
        return "Обеда";
    }
    else if(hours>=19 && hours<=20){
        return "Ужина";
    }
    else if(hours>=9 && hours<=18){
        return "Работы";
    }
    else if(hours>=18 && hours<=23){
        return "Отдыха";
    }
    else if(hours>=23 && hours<=7){
        return "Сна";
    }
}
function test1(){
    window.setInterval(showDate,2000);
}
function showDate(){
    document.getElementById("info").innerHTML="Сейчас время: "+TodayTime();
}