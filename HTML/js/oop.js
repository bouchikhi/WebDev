/**
 *
 * Created by IntelliJ IDEA.
 * User: Evgeniy
 * Date: 29.08.12
 * Time: 11:39
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function(){
    function Mammals(weight){
        this.weight=weight;
    }
    var mammals=new Mammals(60);
function Animal(name,age){
    this.name=name;
    this.age=age;
}
    Animal.prototype=mammals;
var anim=new Animal("Kitty",3);
function Cat(name){
    this.name=name;
}
Cat.prototype=anim;
var cat=new Cat("Gik");
//console.log("name:"+cat.name);
//console.log("age:"+cat.age);
//console.log("weight:"+cat.weight);
    var michail=Object.create(null);
    Object.defineProperty(michail,"last_name",{value:"Michail",
                                            writable:true,
                                            configurable:true,
                                            enumerable:true});
    Object.defineProperty(michail,"first_name",{value:"Baburovich",
                                            writable:true,
                                            configurable:true,
                                            enumerable:true});
    Object.defineProperty(michail,"age",{value:19,
                                         writable:true,
                                         configurable:true,
                                         enumerable:true});
    Object.defineProperty(michail,"gender",{value:"Male",
                                         writable:true,
                                         configurable:true,
                                         enumerable:true});
    function get_full_name(){
        return this.first_name+" "+this.last_name;
    }
    function set_full_name(new_name){
        var names=new_name.trim().split(/\s+/)
            this.first_name=names["0"]||"";
        this.last_name=names["1"]||"";
    }
    Object.defineProperty(michail,"name",{get:get_full_name,set:set_full_name,configurable:true,enumerable:true});
    console.log("FirstName: "+michail["first_name"]);
    console.log("LastName: "+michail["last_name"]);
    console.log("FullName:"+michail.name);
//    delete michail["age"];
    console.log("Age: "+michail["age"]);
//    delete michail["gender"];
    console.log("Gender: "+michail["gender"]);
    console.log("AllPropertyGetOwnPropertyNames: "+Object.getOwnPropertyNames(michail));
    console.log("AllPropertyKeys: "+Object.keys(michail));
    var andrey={
        first_name:"Grin",
        last_name:"Andrey",
        human_age:19,
        gender:"Male",
        get name(){
            return this.first_name+" "+this.last_name;
        },
        set name(new_name){
            var names=new_name.trim().split(/\s+/);
            this.first_name=names["0"] || ""
            this.last_name=names["1"] || ""
        },
        get age(){
            return this.human_age+" years";
        }
    }
        console.log("FullName: "+andrey.name);
        console.log("Age: "+andrey.age);
});
