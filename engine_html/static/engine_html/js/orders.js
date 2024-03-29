// Списки селектов
const checkList = [
    "Вишня", "Ежевика", "Малина", "Клубника","Персик", "Карамель", "Банан", "Без начинки"
];
const biscuitList = [
    'Ванильный','Шоколадный', 'Красный бархат'
];
const coverList= ['Ганаш на белом шоколаде', 'Кремчиз'];


const delivList = [
    "Доставка", "Самовывоз"
];


const checkListTort = [
    "Вишня", "Малина", "Клубника","Персик", "Карамель"
];


const ListCapVid = [
    "Ванильный","Шоколадный","Лимонный","Апельсиновый","Медово-ягодный"
];
const ListCapFilling = [
    "Малина","Клубника","Вишня","Карамель"
];
const ListCapHat = [
    "Крем-чиз","Ганаш темный шоколад","Ганаш белый шоколад","Ганаш молочный шоколад"
];
const ColCapTrList = [
    "4","6","9","12"
];



const ListTrVid = [
    "Красный бархат","Груша-корица","Сникерс","Ягодный йогурт","Ягодный йогурт","Вишня-шоколад"
];


// Функции ------------------------------------------------------------------------------------------------------
function CreateBis(str,formOrd){
    const somebent = document.createElement("div");
    somebent.className = "form-div";
    const benDescription = document.createElement("div");
    benDescription.textContent = str;
    benDescription.id = "var_inf";
    formOrd.append(somebent);
    somebent.append(benDescription);
}

function ChoiceFir(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
};

function maskPhone(event) {
    let matrix = "+7 (___)-___-__-__",
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, "");
    if (def.length >= val.length) val = def;
    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length
        ? val.charAt(i++)
        : i >= val.length
        ? ""
        : a;
    });
    if (event.type == "blur") {
      if (this.value.length == 2) this.value = "";
    } else setCursorPosition(this.value.length, this);
};
function maskDate(event) {
    let matrix = "__-__-__ __:__",
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, "");
    if (def.length >= val.length) val = def;
    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length
        ? val.charAt(i++)
        : i >= val.length
        ? ""
        : a;
    });
    if (event.type == "blur") {
      if (this.value.length == 2) this.value = "";
    } else setCursorPosition(this.value.length, this);
};
function maskWeightTort(event) {
    let matrix = "_,_",
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, "");
    if (def.length >= val.length) val = def;
    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length
        ? val.charAt(i++)
        : i >= val.length
        ? ""
        : a;
    });
    if (event.type == "blur") {
      if (this.value.length == 2) this.value = "";
    } else setCursorPosition(this.value.length, this);
};

function CreateCelect(text,id_sel,list,formOrd){
    const celcont = document.createElement("div");
    celcont.className = "form-div";
    const celDescription = document.createElement("p");
    celDescription.textContent = text;
    formOrd.append(celcont);
    celcont.append(celDescription);
            
    const selDel = document.createElement("select");
    selDel.className = "form-input";
    selDel.id = id_sel;
    celcont.append(selDel);
    // образование селектов
    for (let del of list) {
        const delLabel = document.createElement("option");
        delLabel.textContent = ChoiceFir(del);
        selDel.append(delLabel);
    }
};

function main(mainWind, mainBox){
    mainBox.remove();
    mainWind.classList.remove("none");
};
function validatePhone(phone) {
    let regex =
      /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    return regex.test(phone);
};
function validateDate(date) {
    let regex =
    /\d{1,2}-\d{1,2}-\d{2} \d{1,2}:\d{2}/;
    return regex.test(date);
};

// Жёлтая кнопка заказать
document.querySelector("#push_down").onclick = function(e){
    e.preventDefault();
    
    window.scrollBy(0,500)
}


// Главные функции --------------------------------------------------------------------------------------------------------------------
    // Заказать
for(var i = 0; i < document.getElementsByClassName('but').length; i++) {
    const someBut = document.getElementsByClassName('but')[i];
    someBut.onclick = function (){
        // Сокрытие содержимого страницы
        const mainWind = document.querySelector(".boxRem");
        mainWind.classList.add("none");

        // Cоздание нового html
        const mainBox = document.createElement("div");
        mainBox.className = "boxRemActive";
        document.body.append(mainBox);

        const mainLabel = document.createElement("div");
        if(someBut.id.includes('tort')){
            mainLabel.textContent = "Форма заказа Вашего тортика";
        }else if(someBut.id.includes('bent')){
            mainLabel.textContent = "Форма заказа Вашего бенто - тортика";
        }else if(someBut.id.includes('ind')){
            mainLabel.textContent = "Форма заказа Ваших капкейков или трайфлов";
        }else{
            mainLabel.textContent = "Форма заказа Вашего наборчика";
        }
        mainLabel.className = "mainLab";
        mainBox.append(mainLabel);

        // Форма
        const formOrd = document.createElement("form");
        formOrd.className = "formOrd";
        formOrd.method = "POST";
        formOrd.id = "mainOrder";
        mainBox.append(formOrd);
            
            // Фио
        const FIO = document.createElement("div");
        FIO.className = "form-div";

        formOrd.append(FIO);
        const peopleDescription = document.createElement("p");
        peopleDescription.textContent = "Ваше ФИО";
        const dude = document.createElement("input");
        dude.placeholder = "Введите своё имя";
        dude.className = "form-input";
        dude.name = "name";
        FIO.append(peopleDescription, dude);
       
            // Номер
        const phoneNumberForm = document.createElement("div");
        phoneNumberForm.className = "form-div";
        formOrd.append(phoneNumberForm);

        const phoneNumberDescription = document.createElement("p");
        phoneNumberDescription.textContent = "Номер телефона";
        const phoneNumber = document.createElement("input");
        phoneNumber.name = "phone";
        phoneNumber.placeholder = "+7 (999)-999-99-99";
        phoneNumber.className = "form-input";
        phoneNumber.name = "phone";
        phoneNumber.id = "tel";
        phoneNumber.addEventListener("input", maskPhone, false);
        phoneNumber.addEventListener("focus", maskPhone, false);
        phoneNumber.addEventListener("blur", maskPhone, false);
        phoneNumberForm.append(phoneNumberDescription, phoneNumber);
        
            // Дата и время 
        const DATA = document.createElement("div");
        DATA.className = "form-div";
        formOrd.append(DATA);

        const datadescript = document.createElement("p");
        
        if (someBut.id.includes('tort')){
            datadescript.textContent = "Дата и время приготовления Вашего заказа (минимум 2 дня на приготовление)"
        }else{
            datadescript.textContent = "Дата и время приготовления Вашего заказа (приготовление возможно в день заказа)";
        }
        const data = document.createElement("input");
        data.name = "date";
        data.placeholder = "00-00-0000 00:00";
        data.addEventListener("input", maskDate, false);
        data.addEventListener("focus", maskDate, false);
        data.addEventListener("blur", maskDate, false);
        data.className = "form-input";
        DATA.append(datadescript, data);

        //Селект доставки
        const deliv_vid = CreateCelect("Вид получение товара","deliv_vid",delivList,formOrd);

        // Содержимое заказа разных позиций
            // Бенто-------------------------------------------------------------------------------------------------------------------------------------
        if (someBut.id.includes('bent')){
            if (someBut.id.includes('classic')){
                CreateBis("Вы выбрали КЛАССИЧЕСКИЙ-ВАНИЛЬНЫЙ бенто",formOrd);
            } else if(someBut.id.includes('red')){
                CreateBis("Вы выбрали бенто КРАСНЫЙ БАРХАТ",formOrd);
            } else if(someBut.id.includes('black')){
                CreateBis("Вы выбрали ШОКОЛАДНЫЙ бенто",formOrd);
            } else{
                CreateBis("Вы выбрали ИНДИВИДУАЛЬНЫЙ бенто тортик",formOrd);
                // Селект бисквита
                const bisBent_vid = CreateCelect("Выберите бисквит","bisBent_vid",biscuitList,formOrd);

                //Селект начинки
                const nachBent_vid = CreateCelect("Выберите начинку","nachBent_vid",checkList,formOrd);
            }
            // Чекбокс сложного рисунка
            const checkP = document.createElement("div");
            checkP.className = "form-div checkbox";

            const pictChecbox = document.createElement("input");
            pictChecbox.type = "checkbox";
            pictChecbox.className = "checkP";
            pictChecbox.id = "pictCheckbox";

            const pictLabel = document.createElement("label");
            pictLabel.htmlFor = 'pictCheckbox';
            pictLabel.textContent = "Сложный рисунок / портрет + 150р";
            checkP.append(pictChecbox, pictLabel);
            formOrd.append(checkP);
        }
            // Торты-------------------------------------------------------------------------------------------------------------------------------
        else if(someBut.id.includes('tort')){
            if (someBut.id.includes('straw')){
                CreateBis(
                    "Вы выбрали торт - КЛУБНИЧНЫЙ ЙОГУРТ",
                    formOrd
                );
                const chTort = 'клубничный йогурт';
                 //Покрытие
                const pokr_vid = CreateCelect("Выберите покрытие","pokr_vid",coverList,formOrd);
            }
            else if (someBut.id.includes('tort_black')){
                CreateBis(
                    "Вы выбрали торт - Нежный шоколад",
                    formOrd
                );
            }
            else if (someBut.id.includes('tort_citr')){
                CreateBis(
                    "Вы выбрали торт - Апельсиновый взрыв",
                    formOrd
                );
            }else if (someBut.id.includes('tort_malina')){
                CreateBis(
                    "Вы выбрали торт - Малина-кокос",
                    formOrd
                );
            }else if (someBut.id.includes('tort_cher')){
                CreateBis(
                    "Вы выбрали торт - Черника-лимон",
                    formOrd
                );
            }else{
                CreateBis(
                    "Вы выбрали ИНДИВИДУАЛЬНЫЙ торт",
                    formOrd
                );
                // Селект бисквита
                const bisTort_vid = CreateCelect("Выберите бисквит","bisTort_vid",biscuitList,formOrd);

                //Селект начинки
                const nachTort_vid = CreateCelect("Выберите вид начинки","nachTort_vid",checkListTort,formOrd);
            }
                // Вес
            const weight = document.createElement("div");
            weight.className = "form-div";
            formOrd.append(weight);

            const weightDescription = document.createElement("p");
            weightDescription.textContent = "Вес торта в кг";
            const weightTort = document.createElement("input");
            weightTort.addEventListener("input", maskWeightTort, false);
            weightTort.addEventListener("focus", maskWeightTort, false);
            weightTort.addEventListener("blur", maskWeightTort, false);
            weightTort.placeholder = "От 1,5кг";
            weightTort.className = "form-input";
            weightTort.id = "weightTort";
            weight.append(weightDescription, weightTort);  
        }
            //Наборы-------------------------------------------------------------------------------------------------------------------------------------------------- 
        else if(someBut.id.includes('set')){
            if (someBut.id.includes('set_cap')){
                const inf_set = CreateBis("Вы выбрали НАБОР - Бенто + 3 КАПКЕЙКА",formOrd);
                // Чекбокс рисунков
                const checkP = document.createElement("div");
                checkP.className = "form-div checkbox";

                const pictChecbox = document.createElement("input");
                pictChecbox.type = "checkbox";
                pictChecbox.name = "dop"
                pictChecbox.className = "checkP";
                pictChecbox.id = "pictCheckbox2";

                const pictLabel = document.createElement("label");
                pictLabel.htmlFor = 'pictCheckbox2';
                pictLabel.textContent = "С печатью Ваших картинок + 200р";
                checkP.append(pictChecbox, pictLabel);
                formOrd.append(checkP);

                const cap_vid = CreateCelect("Выберите вид капкейков","capset_vid",ListCapVid,formOrd);
                const cap_fil = CreateCelect("Выберите начинку","capset_fil",ListCapFilling,formOrd);
                const cap_inf = CreateCelect("Выберите шапочку","capset_inf",ListCapHat,formOrd);
            }else{
                const inf_set = CreateBis("Вы выбрали НАБОР - Бенто + 3 ТРАЙФЛА",formOrd);
                const cap_vid = CreateCelect("Выберите вид трайфлов","trset_vid",ListTrVid,formOrd);
            }
            // Селект бисквита
            const bisBent_vid = CreateCelect("Выберите бисквит бенто","bisBent_vid",biscuitList,formOrd);
            //Селект начинки
            const nachBent_vid = CreateCelect("Выберите начинку бенто","nachBent_vid",checkList,formOrd);

            // Чекбокс сложного рисунка
            const checkP = document.createElement("div");
            checkP.className = "form-div checkbox";

            const pictChecbox = document.createElement("input");
            pictChecbox.type = "checkbox";
            pictChecbox.className = "checkP";
            pictChecbox.id = "pictCheckbox";

            const pictLabel = document.createElement("label");
            pictLabel.htmlFor = 'pictCheckbox';
            pictLabel.textContent = "Сложный рисунок / портрет на бенто-тортике + 150р";
            checkP.append(pictChecbox, pictLabel);
            formOrd.append(checkP);
        }
            //Капкейки и трайфлы 
        else if(someBut.id.includes('ind')){
            if(someBut.id.includes('ind_cap')){
                const inf_set = CreateBis("Вы выбрали КАПКЕЙКИ",formOrd);
                // Чекбокс рисунков
                const checkP = document.createElement("div");
                checkP.className = "form-div checkbox";

                const pictChecbox = document.createElement("input");
                pictChecbox.type = "checkbox";
                pictChecbox.name = "dop"
                pictChecbox.className = "checkP";
                pictChecbox.id = "pictCheckbox2";

                const pictLabel = document.createElement("label");
                pictLabel.htmlFor = 'pictCheckbox2';
                pictLabel.textContent = "С печатью Ваших картинок + 200р";
                checkP.append(pictChecbox, pictLabel);
                formOrd.append(checkP);

                const cap_vid = CreateCelect("Выберите вид капкейков","capset_vid",ListCapVid,formOrd);
                const cap_fil = CreateCelect("Выберите начинку","capset_fil",ListCapFilling,formOrd);
                const cap_inf = CreateCelect("Выберите шапочку","capset_inf",ListCapHat,formOrd);
            }else if(someBut.id.includes('ind_tr')){
                const inf_set = CreateBis("Вы выбрали ТРАЙФЛЫ",formOrd);
                const cap_vid = CreateCelect("Выберите вид трайфлов","trset_vid",ListTrVid,formOrd);
            }
            const coll_captr = CreateCelect("Кол-во","coll_captr",ColCapTrList,formOrd);
        }

        // Доп пожелания
        const dream = document.createElement("div");
        dream.className = "form-div";
        formOrd.append(dream);

        const dreamDescription = document.createElement("p");
        dreamDescription.textContent = "Ваши пожелания к заказу";
        const txarea = document.createElement("textarea");
        txarea.name = "text";
        txarea.placeholder = "Коментарии к заказу";
        txarea.className = "form-input";
        dream.append(dreamDescription, txarea);

        // Политика конф
        const politicForm = document.createElement("div");
        politicForm.className = "form-input checkbox";
        const politicChecbox = document.createElement("input");
        politicChecbox.type = "checkbox";
        politicChecbox.id = "politicCheckbox";
        politicChecbox.className = "checkP";

        const politicLabel = document.createElement("label");
        politicLabel.htmlFor = "politicCheckbox";
        politicLabel.textContent =
          "Я ПРИНИМАЮ УСЛОВИЯ ПОЛИТИКИ КОНФИДЕНЦИАЛЬНОСТИ И ЛИЦЕНЗИОННОГО СОГЛАШЕНИЯ";
      
        politicForm.append(politicChecbox, politicLabel);
        formOrd.append(politicForm);

        // Кнопки
        const mainBoxCheckout = document.createElement("div");
        mainBoxCheckout.className = "box-button right";
        mainBox.append(mainBoxCheckout);

        // Вернуться
        const backButton = document.createElement("button");
        backButton.className = "back";
        backButton.textContent = "Вернуться";
        backButton.addEventListener("click", () => {
            mainBox.remove();
            mainWind.classList.remove("none");
        });
        mainBoxCheckout.append(backButton);

        // Кнопка оформить
        const checkout = document.createElement("button");
        checkout.className = "order_cake";
        checkout.textContent = "Оформить";
        checkout.type = "submit";
        mainBoxCheckout.append(checkout);
        
        

        // Отправка форм на сервер ---------------------------------------------------------------------------------------------------------------------------
        checkout.addEventListener("click", function (e) {
            e.preventDefault();

            let name = dude.value;
            let phone = phoneNumber.value;
            let date = data.value;
            let text = txarea.value;
            let deliv = document.getElementById('deliv_vid').value;
            let product = document.getElementById('var_inf').textContent.slice(11);

            if (document.getElementById("politicError")) {
                const politicErr = document.getElementById("politicError");
                politicErr.remove();
            }
            if (politicChecbox.checked != true) {
                const politicErr = document.createElement("label");
                politicErr.textContent = `*НЕОБХОДИМО ПРИНЯТЬ УСЛОВИЯ ПОЛИТИКИ`;
                politicErr.id = "politicError";
                formOrd.append(politicErr);
            }
            if (!validateDate(date)){
                data.classList.add('errorValid');
            }else{   data.classList.remove('errorValid');}

            if (!validatePhone(phone)){
                phoneNumber.classList.add('errorValid');
            }
            else{
                phoneNumber.classList.remove('errorValid');
            }
            if (!/\S/.test(name)){
                dude.classList.add('errorValid');
            }
            else{
                dude.classList.remove('errorValid');
            }

            if(product.includes('ИНДИВИДУАЛЬНЫЙ торт')||product.includes('торт ')||product.includes('КЛУБНИЧНЫЙ ЙОГУРТ')){
                let weightTort = document.getElementById('weightTort');
                
                if (!/^\d{1,2},\d{1,2}$/.test(weightTort.value)){
                    weightTort.classList.add('errorValid')
                }
                else{
                    weightTort.classList.remove('errorValid');
                }

                if (
                /\S/.test(name) &&
                validateDate(date) &&
                validatePhone(phone) &&
                politicChecbox.checked == true &&
                /^\d{1,2},\d{1,2}$/.test(weightTort.value)) 
                {
                    mainBox.classList.add("renderPush");
                    formOrd.classList.add("hidForm");
                    document.querySelector('.box-button').classList.add('hidBut');
                    document.querySelector('.mainLab').classList.add('hidLab');

                    if(product.includes('ИНДИВИДУАЛЬНЫЙ торт')){
                        let bisTort_vid = document.getElementById('bisTort_vid').value;
                        let filTort_vid = document.getElementById('nachTort_vid').value;
                        let weightTort = document.getElementById('weightTort').value;
    
                        const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
                        $.ajax({
                            type: "POST",
                            headers: { "X-CSRFToken": csrftoken },
                            url: '/mainCake',
                            data: {
                                "name": name,
                                "phone":phone,
                                "date": date, 
                                "text": text,
                                "deliv": deliv,
                                "product": product,
                                "bisTort_vid": bisTort_vid,
                                "filTort_vid": filTort_vid,
                                "weightTort": weightTort,
                            },
                            dataType: "json",
                            success: function (data) {
                                // any process in data
                                alert("Спасибо за заказ, в скором времени с Вами свяжутся!")
                                main(mainWind, mainBox)
                            },
                            failure: function () {
                                alert("Технические неполадки, пожалуйста, сделайте заказ по телефону! Извините за неудобства...");
                            }
                        });
                    }else if(product.includes('КЛУБНИЧНЫЙ ЙОГУРТ')){
                        let weightTort = document.getElementById('weightTort').value;
                        let ganash_vid = document.getElementById('pokr_vid').value; 
    
                        const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
                        $.ajax({
                            type: "POST",
                            headers: { "X-CSRFToken": csrftoken },
                            url: '/mainCake',
                            data: {
                                "name": name,
                                "phone":phone,
                                "date": date, 
                                "text": text,
                                "deliv": deliv,
                                "product": product,
                                "weightTort": weightTort,
                                "ganash_vid": ganash_vid,
                            },
                            dataType: "json",
                            success: function (data) {
                                // any process in data
                                alert("Спасибо за заказ, в скором времени с Вами свяжутся!")
                                main(mainWind, mainBox)
                            },
                            failure: function () {
                                alert("Технические неполадки, пожалуйста, сделайте заказ по телефону! Извините за неудобства...");
                            }
                        });
                    }
                    else if(product.includes('торт')){
                        let weightTort = document.getElementById('weightTort').value;
    
                        const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
                        $.ajax({
                            type: "POST",
                            headers: { "X-CSRFToken": csrftoken },
                            url: '/mainCake',
                            data: {
                                "name": name,
                                "phone":phone,
                                "date": date, 
                                "text": text,
                                "deliv": deliv,
                                "product": product,
                                "weightTort": weightTort,
                            },
                            dataType: "json",
                            success: function (data) {
                                // any process in data
                                alert("Спасибо за заказ, в скором времени с Вами свяжутся!")
                                main(mainWind, mainBox)
                            },
                            failure: function () {
                                alert("Технические неполадки, пожалуйста, сделайте заказ по телефону! Извините за неудобства...");
                            }
                        });
                    }
                }
            }//Без тортов
            else if(
                /\S/.test(name) &&
                validateDate(date) &&
                validatePhone(phone) &&
                politicChecbox.checked == true
            ){
                mainBox.classList.add("renderPush");
                formOrd.classList.add("hidForm");
                document.querySelector('.box-button').classList.add('hidBut');
                document.querySelector('.mainLab').classList.add('hidLab');

                // Бенто --------------------------------------------------------------
                if(product.includes('ИНДИВИДУАЛЬНЫЙ бенто')){
                    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
                    let hardPicture = document.getElementById('pictCheckbox').checked;
                    if (hardPicture == true){
                        hardPicture = 'Заказ со сложным рисунком'
                    }else{
                        hardPicture = 'Без сложного рисунка'
                    }

                    // Селекты
                    let bisc_vid = document.getElementById('bisBent_vid').value;
                    let fil_vid = document.getElementById('nachBent_vid').value;

                    $.ajax({
                        type: "POST",
                        headers: { "X-CSRFToken": csrftoken },
                        url: '/mainCake',
                        data: {
                            "name": name,
                            "phone":phone,
                            "date": date, 
                            "text": text,
                            "deliv": deliv,
                            "product": product,
                            "hardPicture": hardPicture,
                            "bisc_vid": bisc_vid,
                            "fil_vid": fil_vid,
                        },
                        dataType: "json",
                        success: function (data) {
                            // any process in data
                            alert("Спасибо за заказ, в скором времени с Вами свяжутся!")
                            main(mainWind, mainBox)
                        },
                        failure: function () {
                            alert("Технические неполадки, пожалуйста, сделайте заказ по телефону! Извините за неудобства...");
                        }
                    });
                }else if (product.includes('бенто')){
                    let hardPicture = document.getElementById('pictCheckbox').checked;
                    if (hardPicture == true){
                        hardPicture = 'Заказ со сложным рисунком'
                    }else{
                        hardPicture = 'Без сложного рисунка'
                    }
                    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
                    $.ajax({
                        type: "POST",
                        headers: { "X-CSRFToken": csrftoken },
                        url: '/mainCake',
                        data: {
                            "name": name,
                            "phone":phone,
                            "date": date, 
                            "text": text,
                            "deliv": deliv,
                            "product": product,
                            "hardPicture": hardPicture,
                        },
                        dataType: "json",
                        success: function (data) {
                            // any process in data
                            alert("Спасибо за заказ, в скором времени с Вами свяжутся!")
                            main(mainWind, mainBox)
                        },
                        failure: function () {
                            alert("Технические неполадки, пожалуйста, сделайте заказ по телефону! Извините за неудобства...");
                        }
                    });
                    
                    
                    // Наборы---------------------------------------
                }else if(product.includes('КАПКЕЙКА')){
                    let capset_vid = document.getElementById('capset_vid').value;
                    let capset_fil = document.getElementById('capset_fil').value;
                    let hat_cap = document.getElementById('capset_inf').value;

                    let bisBent_set = document.getElementById('bisBent_vid').value;
                    let nachBent_set = document.getElementById('nachBent_vid').value;


                    // Печать картинок
                    let printPicture = document.getElementById('pictCheckbox2').checked;
                    if (printPicture == true){
                        printPicture = 'С печатью картинок'
                    }else{
                        printPicture = 'Без печати картинок'
                    }
                    // Рисунок бенто
                    let hardPicture = document.getElementById('pictCheckbox').checked;
                    if (hardPicture == true){
                        hardPicture = 'Заказ со сложным рисунком'
                    }else{
                        hardPicture = 'Без сложного рисунка'
                    }

                    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
                    $.ajax({
                        type: "POST",
                        headers: { "X-CSRFToken": csrftoken },
                        url: '/mainCake',
                        data: {
                            "name": name,
                            "phone":phone,
                            "date": date, 
                            "text": text,
                            "deliv": deliv,
                            "product": product,
                            "hardPicture": hardPicture,
                            "printPicture": printPicture,
                            "capset_vid":  capset_vid,
                            "capset_fil": capset_fil,
                            "hat_cap": hat_cap,
                            "bisBent_set": bisBent_set,
                            "nachBent_set": nachBent_set,
                        },
                        dataType: "json",
                        success: function (data) {
                            // any process in data
                            alert("Спасибо за заказ, в скором времени с Вами свяжутся!")
                            main(mainWind, mainBox)
                        },
                        failure: function () {
                            alert("Технические неполадки, пожалуйста, сделайте заказ по телефону! Извините за неудобства...");
                        }
                    });
                }else if(product.includes('ТРАЙФЛА')){
                    let trset_vid = document.getElementById('trset_vid').value;
                    

                    let bisBent_set = document.getElementById('bisBent_vid').value;
                    let nachBent_set = document.getElementById('nachBent_vid').value;
                    // Рисунок бенто
                    let hardPicture = document.getElementById('pictCheckbox').checked;
                    if (hardPicture == true){
                        hardPicture = 'Заказ со сложным рисунком'
                    }else{
                        hardPicture = 'Без сложного рисунка'
                    }

                    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
                    $.ajax({
                        type: "POST",
                        headers: { "X-CSRFToken": csrftoken },
                        url: '/mainCake',
                        data: {
                            "name": name,
                            "phone":phone,
                            "date": date, 
                            "text": text,
                            "deliv": deliv,
                            "product": product,
                            "hardPicture": hardPicture,
                            "trset_vid":  trset_vid,
                            "bisBent_set": bisBent_set,
                            "nachBent_set": nachBent_set,
                        },
                        dataType: "json",
                        success: function (data) {
                            // any process in data
                            alert("Спасибо за заказ, в скором времени с Вами свяжутся!")
                            main(mainWind, mainBox)
                        },
                        failure: function () {
                            alert("Технические неполадки, пожалуйста, сделайте заказ по телефону! Извините за неудобства...");
                        }
                    });


                    // Другие сладости--------------------------------------------------------------------------------------------
                }else if(product.includes('КАПКЕЙКИ')){
                    let capset_vid = document.getElementById('capset_vid').value;
                    let capset_fil = document.getElementById('capset_fil').value;
                    let hat_cap = document.getElementById('capset_inf').value;
                    let coll_cap = document.getElementById('coll_captr').value;

                    // Печать картинок
                    let printPicture = document.getElementById('pictCheckbox2').checked;
                    if (printPicture == true){
                        printPicture = 'С печатью картинок'
                    }else{
                        printPicture = 'Без печати картинок'
                    }

                    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
                    $.ajax({
                        type: "POST",
                        headers: { "X-CSRFToken": csrftoken },
                        url: '/mainCake',
                        data: {
                            "name": name,
                            "phone":phone,
                            "date": date, 
                            "text": text,
                            "deliv": deliv,
                            "product": product,
                            "printPicture": printPicture,
                            "capset_vid":  capset_vid,
                            "capset_fil": capset_fil,
                            "hat_cap": hat_cap,
                            "coll_cap": coll_cap
                        },
                        dataType: "json",
                        success: function (data) {
                            // any process in data
                            alert("Спасибо за заказ, в скором времени с Вами свяжутся!")
                            main(mainWind, mainBox)
                        },
                        failure: function () {
                            alert("Технические неполадки, пожалуйста, сделайте заказ по телефону! Извините за неудобства...");
                        }
                    });
                }else if(product.includes('ТРАЙФЛЫ')){
                    let coll_cap = document.getElementById('coll_captr').value;
                    let trset_vid = document.getElementById('trset_vid').value;

                    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
                    $.ajax({
                        type: "POST",
                        headers: { "X-CSRFToken": csrftoken },
                        url: '/mainCake',
                        data: {
                            "name": name,
                            "phone":phone,
                            "date": date, 
                            "text": text,
                            "deliv": deliv,
                            "product": product,
                            "coll_cap": coll_cap,
                            "trset_vid": trset_vid,
                        },
                        dataType: "json",
                        success: function (data) {
                            // any process in data
                            alert("Спасибо за заказ, в скором времени с Вами свяжутся!")
                            main(mainWind, mainBox)
                        },
                        failure: function () {
                            alert("Технические неполадки, пожалуйста, сделайте заказ по телефону! Извините за неудобства...");
                        }
                    });
                }
            };




        });


    };

    
}