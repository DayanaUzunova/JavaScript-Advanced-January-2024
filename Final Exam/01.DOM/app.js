window.addEventListener("load", solve);

function solve() {
  function createPreviewSection(event) {
    event.preventDefault();
 
    const snowmanPreview = document.querySelector(".snowman-preview");
    const snowmanName = document.querySelector("#snowman-name").value;
    const snowmanHeight = document.querySelector("#snowman-height").value;
    const location = document.querySelector("#location").value;
    const creatorName = document.querySelector("#creator-name").value;
    const specialAttribute = document.querySelector("#special-attribute").value;
 
    if (
      snowmanName.trim() === "" ||
      snowmanHeight.trim() === "" ||
      location.trim() === "" ||
      creatorName.trim() === "" ||
      specialAttribute.trim() === ""
    ) {
      return;
    }
    const snowmanInfo = document.createElement("li");
    snowmanInfo.classList.add("snowman-info");
    const article = document.createElement("article");
    snowmanInfo.appendChild(article);
 
    const snowmanNameP = document.createElement("p");
    snowmanNameP.textContent = `Name: ${snowmanName}`;
    article.appendChild(snowmanNameP);
 
    const snowmanHeightP = document.createElement("p");
    snowmanHeightP.textContent = `Height: ${snowmanHeight}`;
    article.appendChild(snowmanHeightP);
 
  
    const locationP = document.createElement("p");
    locationP.textContent = `Location: ${location}`;
    article.appendChild(locationP);
 
    const creatorNameP = document.createElement("p");
    creatorNameP.textContent = `Creator: ${creatorName}`;
    article.appendChild(creatorNameP);
 
    const specialAttributeP = document.createElement("p");
    specialAttributeP.textContent = `Attribute: ${specialAttribute}`;
    article.appendChild(specialAttributeP);
 
    const btnContainer = document.createElement("div");
    btnContainer.classList.add("btn-container");
 
    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", editSnowmanInfo);
    btnContainer.appendChild(editBtn);
 
    const nextBtn = document.createElement("button");
    nextBtn.classList.add("next-btn");
    nextBtn.textContent = "Next";
    nextBtn.addEventListener("click", moveSnowmanInfoToNextSection);
 
    btnContainer.appendChild(nextBtn);
    snowmanInfo.appendChild(btnContainer);
 
    snowmanPreview.appendChild(snowmanInfo);
 
    clearForm();
    document.querySelector(".add-btn").disabled = true;
  }
 
  function clearForm() {
    document.querySelector("#snowman-name").value = "";
    document.querySelector("#snowman-height").value = "";
    document.querySelector("#location").value = "";
    document.querySelector("#creator-name").value = "";
    document.querySelector("#special-attribute").value = "";
  }
 
  function editSnowmanInfo(event) {
    const snowmanInfo = event.target.parentElement.parentElement;
    const article = snowmanInfo.querySelector("article");
    const snowmanName = article.querySelector("p");
    const snowmanHeight = snowmanName.nextElementSibling;
    const location = snowmanHeight.nextElementSibling;
    const creatorName = location.nextElementSibling;
    const specialAttribute = creatorName.nextElementSibling;
 
    document.querySelector("#snowman-name").value =
      snowmanName.textContent.split(": ")[1];
    document.querySelector("#snowman-height").value =
      snowmanHeight.textContent.split(": ")[1];
    document.querySelector("#location").value =
      location.textContent.split(": ")[1];
    document.querySelector("#creator-name").value =
      creatorName.textContent.split(": ")[1];
    document.querySelector("#special-attribute").value =
      specialAttribute.textContent.split(": ")[1];
 
    snowmanInfo.remove();
    document.querySelector(".add-btn").disabled = false;
  }
 
  function moveSnowmanInfoToNextSection() {
    const snowList = document.querySelector(".snow-list");
 
    const snowmanInfo = document.querySelector(".snowman-info");
    const article = snowmanInfo.querySelector("article");
    const snowmanContent = document.createElement("li");
    snowmanContent.classList.add("snowman-content");
    snowmanContent.appendChild(article);
    snowList.appendChild(snowmanContent);
 
    snowmanInfo.remove();
 
    snowmanInfo.querySelector(".btn-container").remove();
    
    const sendBtn = document.createElement("button");
    sendBtn.classList.add("send-btn");
    sendBtn.textContent = "Send";
    
    snowmanContent.querySelector("article").appendChild(sendBtn);
  
    sendBtn.addEventListener("click", sendInfo);
  }
 
  function sendInfo() {
    const mainElement = document.querySelector("main");
    mainElement.remove();
 
    
    const backImg = document.querySelector("#back-img");
    backImg.removeAttribute("hidden");
    
    const backButton = document.createElement("button");
    backButton.classList.add("back-btn");
    backButton.textContent = "Back";
 
    document.body.appendChild(backButton);
    backButton.addEventListener("click", () => window.location.reload());
  }
 
  document
    .querySelector(".snowman")
    .addEventListener("submit", createPreviewSection);
}