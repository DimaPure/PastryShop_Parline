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


// ------------------------------------------------------------------------------------------------------



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

function mask(event) {
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
}



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
        FIO.append(peopleDescription, dude);
       
            // Номер
        const phoneNumberForm = document.createElement("div");
        phoneNumberForm.className = "form-div";
        formOrd.append(phoneNumberForm);

        const phoneNumberDescription = document.createElement("p");
        phoneNumberDescription.textContent = "Номер телефона";
        const phoneNumber = document.createElement("input");
        phoneNumber.placeholder = "+7 (999)-999-99-99";
        phoneNumber.className = "form-input";
        phoneNumber.name = "phone";
        phoneNumber.id = "tel";
        phoneNumber.addEventListener("input", mask, false);
        phoneNumber.addEventListener("focus", mask, false);
        phoneNumber.addEventListener("blur", mask, false);
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
        data.placeholder = "00/00/0000 00:00";
        data.className = "form-input";
        DATA.append(datadescript, data);

        //Селект доставки
        const deliv_vid = CreateCelect("Вид получение товара","deliv_vid",delivList,formOrd);

        // Содержимое заказа разных позиций
            // Бенто-------------------------------------------------------------------------------------------------------------------------------------
        if (someBut.id.includes('bent')){
            if (someBut.id.includes('classic')){
                CreateBis("Вы выбрали КЛАССИЧЕСКИЙ - ВАНИЛЬНЫЙ бисквит",formOrd);
                const chBis = 'КЛАССИЧЕСКИЙ-ВАНИЛЬНЫЙ';
            } else if(someBut.id.includes('red')){
                CreateBis("Вы выбрали КРАСНЫЙ БАРХАТ",formOrd);
                const chBis = 'КРАСНЫЙ БАРХАТ';
            } else if(someBut.id.includes('black')){
                CreateBis("Вы выбрали ШОКОЛАДНЫЙ бенто - торт",formOrd);
                const chBis = 'ШОКОЛАДНЫЙ';
            } else{
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
                    "Вы выбрали КЛУБНИЧНЫЙ ЙОГУРТ - 1300руб / 1кг (Ванильные бисквиты, клубничный крем суфле, клубничная начинка, ганаш на белом шоколаде)",
                    formOrd
                );
                const chTort = 'клубничный йогурт';
                 //Покрытие
                const pokr_vid = CreateCelect("Выберите покрытие","pokr_vid",coverList,formOrd);
            }
            else if (someBut.id.includes('tort_black')){
                CreateBis(
                    "Вы выбрали Нежный шоколад — 1450руб / 1кг (Шоколадные бисквиты, ганаш на белом шоколаде, шоколадный крем суфле, соленая карамель. Покрытие — ганаш)",
                    formOrd
                );
            }
            else if (someBut.id.includes('tort_citr')){
                CreateBis(
                    "Вы выбрали Апельсиновый взрыв — 1200 руб / 1кг (Апельсиновые бисквиты, Апельсиновая начинка, Крем чиз, Пропитка апельсиновый курд)",
                    formOrd
                );
            }else if (someBut.id.includes('tort_malina')){
                CreateBis(
                    "Вы выбрали Малина-кокос – 1300 руб / 1кг (Кокосовые коржи, Малиновая начинка + кокосовый ганаш на белом шоколаде, Покрытие сырным кремом)",
                    formOrd
                );
            }else if (someBut.id.includes('tort_cher')){
                CreateBis(
                    "Вы выбрали  Черника-лимон -1300руб / 1кг (Лимоные коржи, Черничное кремю + лимонный курд, Покрытие - кремчиз)",
                    formOrd
                );
            }else{
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
            weightTort.placeholder = "От 1,5кг";
            weightTort.className = "form-input";
            weight.append(weightDescription, weightTort);  
        }
            //Наборы-------------------------------------------------------------------------------------------------------------------------------------------------- 
        else if(someBut.id.includes('set')){
            if (someBut.id.includes('set_cap')){
                const inf_set = CreateBis("Вы выбрали Бенто-торт + 3 КАПКЕЙКА",formOrd);
                // Чекбокс рисунков
                const checkP = document.createElement("div");
                checkP.className = "form-div checkbox";

                const pictChecbox = document.createElement("input");
                pictChecbox.type = "checkbox";
                pictChecbox.name = "dop"
                pictChecbox.className = "checkP";
                pictChecbox.id = "pictCheckbox";

                const pictLabel = document.createElement("label");
                pictLabel.htmlFor = 'pictCheckbox';
                pictLabel.textContent = "С печатью Ваших картинок + 200р";
                checkP.append(pictChecbox, pictLabel);
                formOrd.append(checkP);

                const cap_vid = CreateCelect("Выберите вид капкейков","capset_vid",ListCapVid,formOrd);
                const cap_fil = CreateCelect("Выберите начинку","capset_fil",ListCapFilling,formOrd);
                const cap_inf = CreateCelect("Выберите шапочку","capset_inf",ListCapHat,formOrd);
            }else{
                const inf_set = CreateBis("Вы выбрали Бенто-торт + 3 ТРАЙФЛА",formOrd);
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
                pictChecbox.id = "pictCheckbox";

                const pictLabel = document.createElement("label");
                pictLabel.htmlFor = 'pictCheckbox';
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
        txarea.placeholder = "Коментарии к заказу";
        txarea.className = "form-input";
        dream.append(dreamDescription, txarea);

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
    }
}