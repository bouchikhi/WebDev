/**
 * Created by IntelliJ IDEA.
 * User: Evgeniy
 * Date: 04.10.12
 * Time: 8:46
 * To change this template use File | Settings | File Templates.
 */
function countItem(array,cmp){
    var count=0;
    for(var i=0;i<array.length;i++){
        if(cmp(array[i],0)){
            count++;
        }
    }
    return count;
}
function cmp1(number,value){
    if(number<value){
        return true;
    }
    else
    return false;
}
function cmp2(number,value){
    if(number>value){
        return true;
    }
        else
        return false;
}
function test1(){
    var arr=[1.2,2.6,3.1,4.7,5.3,6.8,-5.5,-4.8,-3.9,-7.1];
    document.writeln("Исходный массив: ",arr,"<br>");
    document.writeln("Число отрицательных:",countItem(arr,cmp1));
}
function test2(){
    var arr=[1.2,2.6,3.1,4.7,5.3,6.8,-5.5,-4.8,-3.9,-7.1];
    document.writeln("Исходный массив: ",arr,"<br>");
    document.writeln("Число  положительных:",countItem(arr,cmp2));
}