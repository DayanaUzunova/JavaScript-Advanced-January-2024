function addItem() {
    const input = document.getElementById("newItemText");

    if(input.value.length == 0){
        return;
    }
    
    const liElement = document.createElement("li");
    liElement.textContent = input.value;

    const list = document.getElementById("items");
    list.appendChild(liElement);

    input.value = "";
}