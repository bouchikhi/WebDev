/**
 *
 * Created by IntelliJ IDEA.
 * User: Evgeniy
 * Date: 29.08.12
 * Time: 11:39
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function(){
    var human=Object.create(null);
    Object.defineProperty(human,"name",{value:"Poligraph",writable:true,configurable:true,enumerable:false});
    Object.defineProperty(human,"firstName",{value:"Sharicoff",writable:true,configurable:true,enumerable:false});
    Object.defineProperty(human,"fullName",{get:function(){return this.name+' '+this.firstName},configurable:true,enumerable:true});
    Object.defineProperty(human,"age",{value:18,writable:false,configurable:false,enumerable:false});
//    Аналогично предыдущему
//    Object.defineProperties(human,{name:{value:"Evgenii",writable:true,configurable:true,enumerate:true}
//    ,age:{value:18,writable:true,configurable:true,enumerate:true}});

    console.log("Name:"+human["name"]);
    console.log("Age:"+human["age"]);
    delete human.age;//Поле age нельзя удалить, параметр configurable=false
    human.age=12;//Поле age является неизменяемым, параметр writable=false
    console.log("Age:"+human["age"]);
    console.log("FullName: "+human["fullName"]);
    console.log("AllFields: "+Object.getOwnPropertyNames(human));
    console.log("Поля с флагом enumerable: "+Object.keys(human));


});
