const checkList = [
    "Вишня", "Ежевика", "Малина", "Клубника","Персик", "Карамель", "Банан", "Без начинки"
];
const biscuitList = [
    'Ванильный','Шоколадный', 'Красный бархат'
];
const delivList = [
    "Доставка", "Самовывоз"
];


function CreateBis(str,formOrd){
    const somebent = document.createElement("div");
    somebent.className = "form-div";
    const benDescription = document.createElement("div");
    benDescription.textContent = str;
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
            mainLabel.textContent = "Форма заказа Вашего бенто-тортика";
        }else if(someBut.id.includes('cup')){
            mainLabel.textContent = "Форма заказа Вашего капкейка или трайфла";
        }else{
            mainLabel.textContent = "Форма заказа Вашего наборчика";
        }
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
        const delivery = document.createElement("div");
        delivery.className = "form-div";
        const deliveryDescription = document.createElement("p");
        deliveryDescription.textContent = "Вид получения товара";
        formOrd.append(delivery);
        delivery.append(deliveryDescription);
            
        const selDel = document.createElement("select");
        selDel.className = "form-input";
        selDel.id = "delivery";
        delivery.append(selDel);
        // образование селектов
        for (let del of delivList) {
            const delLabel = document.createElement("option");
            delLabel.textContent = ChoiceFir(del);
            selDel.append(delLabel);
        }

        // Содержимое заказа разных позиций
            // Бенто
        if (someBut.id.includes('bent')){
            if (someBut.id.includes('classic')){
                CreateBis("Вы выбрали КЛАССИЧЕСКИЙ-ВАНИЛЬНЫЙ бисквит",formOrd);
                const chBis = 'КЛАССИЧЕСКИЙ-ВАНИЛЬНЫЙ';
            } else if(someBut.id.includes('red')){
                CreateBis("Вы выбрали КРАСНЫЙ БАРХАТ",formOrd);
                const chBis = 'КРАСНЫЙ БАРХАТ';
            } else if(someBut.id.includes('black')){
                CreateBis("Вы выбрали ШОКОЛАДНЫЙ бенто-торт",formOrd);
                const chBis = 'ШОКОЛАДНЫЙ';
            } else{
                // Селект бисквита
                const bis = document.createElement("div");
                bis.className = "form-div";
                const biscuitDescription = document.createElement("p");
                biscuitDescription.textContent = "Выберите бисквит";
                formOrd.append(bis);
                bis.append(biscuitDescription);
                    
                const selBis = document.createElement("select");
                selBis.className = "form-input";
                selBis.id = "biscuit";
                bis.append(selBis);
                // образование селектов
                for (let sel of biscuitList) {
                    const selLabel = document.createElement("option");
                    selLabel.textContent = ChoiceFir(sel);
                    selBis.append(selLabel);
                }
                const chBis = selBis.value
            }

            //Селект начинки
            const filling = document.createElement("div");
            filling.className = "form-div";
            const fillingDescription = document.createElement("p");
            fillingDescription.textContent = "Выберите начинку";
            formOrd.append(filling);
            filling.append(fillingDescription);
                
            const filDel = document.createElement("select");
            filDel.className = "form-input";
            filDel.id = "filling";
            filling.append(filDel);
            // образование селектов
            for (let fil of checkList) {
                const filLabel = document.createElement("option");
                filLabel.textContent = ChoiceFir(fil);
                filDel.append(filLabel);
            }
        }
            // Торты
        else if(someBut.id.includes('tort')){
            if (someBut.id.includes('straw')){
                CreateBis(
                    "Вы выбрали КЛУБНИЧНЫЙ ЙОГУРТ - 1300руб / 1кг (Ванильные бисквиты, клубничный крем суфле, клубничная начинка, ганаш на белом шоколаде)",
                    formOrd
                );
                const chTort = 'клубничный йогурт';
                 //Покрытие
                const cover = document.createElement("div");
                cover.className = "form-div";
                const coverDescription = document.createElement("p");
                coverDescription.textContent = "Выберите покрытие";
                formOrd.append(cover);
                cover.append(coverDescription);
                    
                const covDel = document.createElement("select");
                covDel.className = "form-input";
                covDel.id = "cover";
                cover.append(covDel);
                const coverList= ['Ганаш на белом шоколаде', 'Кремчиз'];
                for (let cov of coverList) {
                    const covLabel = document.createElement("option");
                    covLabel.textContent = ChoiceFir(cov);
                    covDel.append(covLabel);
                }
            }
            else if (someBut.id.includes('tort_black')){
                CreateBis(
                    "Нежный шоколад — 1450руб / 1кг (Шоколадные бисквиты, ганаш на белом шоколаде, шоколадный крем суфле, соленая карамель. Покрытие — ганаш)",
                    formOrd
                );
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


        }else if(someBut.id.includes('set')){
            console.log('set')
        }else if(someBut.id.includes('cup')){
            console.log('cup')
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

        // Кнопка оформить
        const mainBoxCheckout = document.createElement("div");
        mainBoxCheckout.className = "box-button right";
        mainBox.append(mainBoxCheckout);
        
        const checkout = document.createElement("button");
        checkout.className = "order_cake";
        checkout.textContent = "Оформить";
        checkout.type = "submit";
        mainBoxCheckout.append(checkout);
        // Вернуться
        const backButton = document.createElement("button");
        backButton.className = "back";
        backButton.textContent = "Вернуться";
        backButton.addEventListener("click", () => {
            mainBox.remove();
            mainWind.classList.remove("none");
        });
        mainBoxCheckout.append(backButton);
    }
}