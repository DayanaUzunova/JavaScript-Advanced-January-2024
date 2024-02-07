function toggle() {
    let button = document.getElementsByClassName("button")[0];
    let displayText = document.getElementById("extra");
if(button.textContent == "More"){
    displayText.style.display = "block";
    button.textContent = "Less";
}
else if (button.textContent == "Less"){
    displayText.style.display = "none";
    button.textContent = "More"
}
}