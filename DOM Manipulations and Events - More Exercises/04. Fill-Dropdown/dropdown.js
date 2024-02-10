function addItem() {
    const selectMenuRef = document.getElementById("menu");
    let textInputRef = document.getElementById("newItemText");
    let keyInputRef = document.getElementById("newItemValue");

    let textValue = textInputRef.value;
    let keyValue = keyInputRef.value;

    let option = document.createElement("option");
    option.value = keyValue;
    option.text = textValue;

    selectMenuRef.appendChild(option);

    textInputRef.value = "";
    keyInputRef.value = "";
}