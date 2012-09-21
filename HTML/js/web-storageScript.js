/**
 * Created with JetBrains PhpStorm.
 * User: evgenii
 * Date: 08.09.12
 * Time: 10:10
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function(){
    if(window.sessionStorage){
        alert("Браузер поддерживает WebStorage");
    }
    else
    alert("Браузер НЕ поддерживает WebStorage");
});