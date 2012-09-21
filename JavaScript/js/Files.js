/**
 * Created by IntelliJ IDEA.
 * User: Evgeniy
 * Date: 08.09.12
 * Time: 19:20
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function(){
   var input=$("input[type=file]");
    input.change(function(){
        var files=this.files;
        for(var i=0;i<files.length;i++){
            alert("name: "+files[i].name);
        }
    })
});