const but_cont = document.querySelector('.form-cont');
const act1 = document.getElementById('popup_cont');
const act2 = document.getElementById('container-pole2');
const exit = document.getElementById('exit');

const menu = document.querySelector('.menu-burger');
const menu_nav = document.querySelector('.nav_cont');

if(menu){
    menu.addEventListener('click',function() { 
        if(menu.classList.contains('open-menu')){
            menu.classList.remove("open-menu");
            menu_nav.classList.remove("open-menu");
        }else{
            menu.classList.add("open-menu");
            menu_nav.classList.add("open-menu");
        }
    });
}

if (but_cont){
    but_cont.addEventListener('click',function() { 
        act1.classList.add("is-active");
        act2.classList.add("is-active");
    });
    exit.addEventListener('click',function() { 
        act1.classList.remove("is-active");
        act2.classList.remove("is-active");
    });
}

