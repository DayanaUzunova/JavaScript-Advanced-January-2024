function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let searchInputRef = document.getElementById("searchField");
   let tableRows = Array.from(document.querySelectorAll("tbody tr"));

   function onClick() {
      //let searchText = searchInputRef.value
      let searchText = searchInputRef.value;

      //for loop for every row of the table
      for (let tableRow of tableRows){
         let tableData = Array.from(tableRow.querySelectorAll("td"));
         for (let data of tableData){
            if (data.textContent.includes(searchText)){
               tableRow.classList.add("select");
               break;
            }
            else {
            tableRow.classList.remove("select");
            }
         }  
      }
      searchInputRef.value = "";
   }
}