const checkList = [
    "вишня", "ежевика", "малина", "клубника","персик", "карамель", "банан", "без начинки"
];
for(var i = 0; i < document.getElementsByClassName('but').length; i++) {
    const someBut = document.getElementsByClassName('but')[i];
    someBut.onclick = function (){
        const mainWind = document.querySelector(".boxRem");
        mainWind.classList.add("none");


        const mainBox = document.createElement("div");
        mainBox.className = "boxRemActive";
        document.body.append(mainBox);

        const boxButton = document.createElement("div");
        boxButton.className = "box-button";
        // const backButton = document.createElement("button");
        // backButton.className = "back";
        // backButton.textContent = "Вернуться";
        // backButton.addEventListener("click", () => {
        //     mainBox.remove();
        //     mainWind.classList.remove("none");
        // });
        // boxButton.append(backButton);

        // const boxButtonCheckout = document.createElement("div");
        // boxButtonCheckout.className = "box-button right";
        // const checkout = document.createElement("button");
        // checkout.className = "order";
        // checkout.textContent = "Оформить";
        // checkout.type = "submit";
        // boxButtonCheckout.append(checkout);

        // const form = document.createElement("form");
        // form.className = "form";
        // form.method = "POST";
        // form.id = "tg";

        // const companyForm = document.createElement("div");
        // companyForm.className = "form-div";
        // const companyDescription = document.createElement("p");
        // companyDescription.textContent = "Название компании";
        // const company = document.createElement("input");
        // company.placeholder = "Введите название вашей компании";
        // company.className = "form-input";
        // companyForm.append(companyDescription, company);
    }
}