window.addEventListener('load', solve);

function solve() {//дом референции, лисънър на събмит
//търсим референции към инпутите
   const formRef = document.querySelector("form");
   formRef.addEventListener("submit", onSubmit);
   const firstNameRef = document.getElementById("first-name");
   const lastNameRef = document.getElementById("last-name");
   const peopleCountRef = document.getElementById("people-count");
   const fromDateRef = document.getElementById("from-date");
   const daysCountRef = document.getElementById("days-count");
   //референции към двете секции в които да се закачат li елементите
   const infoTicketUl = document.querySelector("#info-ticket ul");
   const confirmTicketUl = document.querySelector("#confirm-ticket-section ul");
   //референция към некст бутона
   const nextBtnRef = document.getElementById("next-btn");
   const body = document.getElementById("body");
   let main;

   function onSubmit(e){
    e.preventDefault();
    //взимаме велютата от форума
    let firstName = firstNameRef.value;
    let lastName = lastNameRef.value;
    let peopleCount = peopleCountRef.value;
    let fromDate = fromDateRef.value;
    let daysCount = daysCountRef.value;

    //проверяваме дали някое от тях е празно
    if(!firstName || !lastName || !peopleCount || !fromDate || !daysCount){
        //нищо не правим
        return;
    }
    //създаваме елемент тикет, който се вижда в следващия артикъл
    let ticket = createTicket(firstName, lastName, peopleCount, fromDate, daysCount);
    
    infoTicketUl.appendChild(ticket);
    toggleButtonNext();
    //чистим форума
    formRef.reset();
   }

   //създава елемента тикет
   function createTicket(firstName, lastName, peopleCount, fromDate, daysCount){
    //създава елемента ли
    let li = document.createElement('li');
    li.classList.add("ticket");
    //тук му подаваме стойности с innerhtml
    let innerHTMLContent = "<article>";
    innerHTMLContent += `<h3>Name: ${firstName} ${lastName}</h3>`;
    innerHTMLContent += `<p>From date: ${fromDate}</p>`;
    innerHTMLContent += `<p>For ${daysCount} days</p>`;
    innerHTMLContent += `<p>For ${peopleCount} people</p>`;
    innerHTMLContent += "</article>";

    li.innerHTML = innerHTMLContent;
    //създаваме два бутона
    let editBtn = createBtn("edit-btn", "Edit");
    let continueBtn = createBtn("continue-btn", "Continue");
    //закачаме им event listeners
    editBtn.addEventListener("click", onEdit);
    continueBtn.addEventListener("click", onContinue);
    //закачаме ги към елемента
    li.appendChild(editBtn);
    li.appendChild(continueBtn);

    //връщаме елемента
    return li;
   }
//функция за създаване на бутони
//прима клас и текст
   function createBtn(classes, text){
    //създава бутон
    let btn = document.createElement("button");
    //ако има клас, добавя класа към бутона
    classes && btn.classList.add(classes);
    //слага му текста, който е подаден на функцията
    btn.textContent = text;
    //връща бутона
    return btn;
   }

   //обръща текущото положение на бутона, ако е enable става disable
   function toggleButtonNext(){
    nextBtnRef.disabled = !nextBtnRef.disabled;
   }

   function onEdit(e){
    //взимаме артикъла
    let articleChildren = e.currentTarget.parentElement.querySelector("article").children;
    //взимаме и неговите children и ги сплитваме, за да вземем стойностите
    let nameData = articleChildren[0].textContent.split(" ");
    let dateTokens = articleChildren[1].textContent.split(" ");
    let daysCountToken = articleChildren[2].textContent.split(" ");
    let peopleCountToken = articleChildren[3].textContent.split(" ");

    //взимаме си правилните стойности за променливите
    let firstName = nameData[1];
    let lastName = nameData[2];
    let fromDate = dateTokens[2];
    let daysCount = daysCountToken[1];
    let peopleCount = peopleCountToken[1];

    //възстановяваме стойностите, които сме получили в input полетата
    firstNameRef.value = firstName;
    lastNameRef.value = lastName;
    fromDateRef.value = fromDate;
    daysCountRef.value = daysCount;
    peopleCountRef.value = peopleCount;
    //преминаване напред 
    toggleButtonNext();

    //изчистваме самият li елемент
    infoTicketUl.innerHTML = "";
   }

   function onContinue(e){
    //взимаме листа
    let li = e.currentTarget.parentElement;
    //взимаме му двата бутона
    let btns = li.querySelectorAll("button");
    //изтриваме ги
    btns[0].remove();
    btns[1].remove();
    //създаваме си два нови бутона
    let confirmBtn = createBtn("confirm-btn", "Confirm");
    let cancelBtn = createBtn("cancel-btn", "Cancel");

    //закачаме им event listeners
    confirmBtn.addEventListener("click", onConfirm);
    cancelBtn.addEventListener("click", onCancel);

    //слагам ги обратно в листа
    li.appendChild(confirmBtn)
    li.appendChild(cancelBtn);
    //към секцията закачам ли-то
    confirmTicketUl.appendChild(li);
   }

   function onCancel(e){
    onDelete(e.target.parentElement);
    toggleButtonNext();
   }

   function onConfirm(e){
    //изтриваме целият лист
    onDelete(e.target.parentElement);
    //вземам референция към мейн елемента, той държи всички неща
    main = document.getElementById("main");
    //зачистваме целият контент в бодито
    body.innerHTML = "";
    //създаваме h1
    let h1 = document.createElement("h1");
    h1.textContent = "Thank you, have a nice day!";
    h1.id = "thank-you";
    //създаваме бутон
    let btn = createBtn("", "Back");
    btn.id = "back-btn";
    //закачаме му event listener 
    btn.addEventListener("click", onReset);
    //append-ваме h1 и бутона към бодито
    body.appendChild(h1);
    body.appendChild(btn);
   }

   function onReset(){
    //зачистваме бодито
    body.innerHTML = "";
    //append-ваме main-a обратно
    body.appendChild(main);
    toggleButtonNext();
   }

   function onDelete(elRef){
    elRef.remove();
   }
}


    
    
