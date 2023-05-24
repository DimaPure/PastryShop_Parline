//Поиск по странице в Firefox 
var Bro = navigator.userAgent;
if(!Bro.includes('Firefox')){
    document.querySelector('#search_firefox').classList.add('hid_search');
    document.querySelector('#Men_search').classList.add('top_men');
    document.querySelector('#magaz').classList.add('magaz');
}

// Поиск для firefox
document.querySelector("#bt_search").onclick = function(e){
    e.preventDefault();

    let objVal = document.querySelector("#searchLo").value;
    if (objVal){
        if (window.find(objVal)){
            console.log(objVal);
            $(window).scrollTop($(`"*:contains('${ objVal }'):last"`).offset().top);
        }else{
            alert("К сожалению ничего не нашлось(");
        }
    }
    else{
        alert('Если хотите что-нибудь найти, напишите это в поле ввода!')
    }

}; 