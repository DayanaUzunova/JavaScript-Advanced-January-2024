function search() {
   let townsRef = Array.from(document.querySelectorAll("ul#towns>li"));
   let textToSearch = document.getElementById("searchText").value;
   let result = document.getElementById("result");

   let matches = 0;
   townsRef.forEach(town => {
      let townName = town.textContent;
   if (townName.includes(textToSearch)){
      town.innerHTML = `<bold><u>${townName}</u></bold>`;
      matches++;
   }
});
   result.textContent = `${matches} matches found`;
}
