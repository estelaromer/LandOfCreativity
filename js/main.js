var menu = document.getElementById('toggle');
menu.addEventListener('click', toggle);
var mostrado = false;

function toggle(){
    var enlaces = document.getElementById('enlaces');
    if(mostrado === false){
        enlaces.style = 'display:block';
    }
    else{
        enlaces.style = 'display:none';
    }
    mostrado = !mostrado;
}