/**
 *
 * Created by IntelliJ IDEA.
 * User: Evgeniy
 * Date: 29.08.12
 * Time: 11:39
 * To change this template use File | Settings | File Templates.
 */

function Animal(){
    this.weight=0;
    this.getName=function(){
        return this.name;
    };
    this.height=[];

}
var animal=new Animal();
function Rabbit(name){
    this.name=name;
}
Rabbit.prototype=animal;
var rab=new Rabbit("Chuk");
console.log(rab.getName());
Rabbit.prototype.say=function(){
    console.log("Hello!");
};
var dog=new Animal();
var cat=new Animal();
dog.height.push("One");
cat.height.push("Two");
console.log("Cat:"+cat.height.length);
console.log("Dog:"+dog.height.length);
var One=function(){
    this.setX=function(x){
        this.x=x;
    }
    this.getX=function(){
        return this.x;
    }
};
var Two=function(){
    this.mulX=function(y){
        this.x=this.x*2;
    }
};
function extend(parent,child){
    var F=function(){}
        F.prototype=parent.prototype;
    child.prototype=new F();
    child.prototype.constructor=child;
}
extend(One,Two);
var a=new Two();
a.setX(5);
a.mulX(4);
Console.log(a.getX());

