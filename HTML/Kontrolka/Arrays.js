/**
 * Created by IntelliJ IDEA.
 * User: Evgeniy
 * Date: 25.10.12
 * Time: 8:50
 * To change this template use File | Settings | File Templates.
 */
function searchItem(array){
    for(var i=0;i<array.length;i++){
        if(array[i]==0){
            return i;
        }
    }
}
function testArraySearch(){
    var mas=[1,2,0,4,5,6,7,0];
    document.writeln("Исходный массив:"+mas+"<br>"+"Позиция первого элемента равного 0: "+searchItem(mas));
}