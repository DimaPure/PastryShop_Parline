function validateEmailCont(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};
function validatePhoneCont(phone) {
    let regex =
      /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    return regex.test(phone);
};

document.querySelector("#subPush").onclick = function(e){
    e.preventDefault();

    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let number = document.querySelector("#phone").value;
    let text = document.querySelector('#text').value;

    if(!validateEmailCont(email)){
        document.querySelector('#email').classList.add('errorCont');
    }
    else{
        document.querySelector('#email').classList.remove('errorCont');
    }
    if(!validatePhoneCont(number)){
        document.querySelector('#phone').classList.add('errorCont');
    }
    else{
        document.querySelector('#phone').classList.remove('errorCont');
    }
    if(!/\S/.test(name)){
        document.querySelector('#name').classList.add('errorCont');
    }
    else{
        document.querySelector('#name').classList.remove('errorCont');
    }
    if(!/\S/.test(text)){
        document.querySelector('#text').classList.add('errorCont');
    }
    else{
        document.querySelector('#text').classList.remove('errorCont');
    }

    if(
        validateEmailCont(email)&&
        /\S/.test(name) &&
        validatePhoneCont(number)&&
        /\S/.test(text)
    ){
        document.querySelector('#loading_cont').classList.add('load_cont');
        document.querySelector('#hid_fr').classList.add('load_cont2');
        $.ajax({
            type: "POST",
            headers: { "X-CSRFToken": csrftoken },
            url: '/cont',
            data: {
                "name": name,
                "email":email,
                "number": number, 
                "text": text,
            },
            dataType: "json",
            success: function (data) {
                // any process in data
                alert("Спасибо за сообщение, в скором времени с Вами свяжутся!");
                document.querySelector('#loading_cont').classList.remove('load_cont');
                document.querySelector('#hid_fr').classList.remove('load_cont2');
                document.querySelector('#load_C').classList.remove('load_Cont');
                document.querySelector('#form').reset()
            },
            failure: function () {
                alert("Технические неполадки, позвоните по номеру 89998723775! Извините за неудобства...");
            }
        });
    }
        

        
};

