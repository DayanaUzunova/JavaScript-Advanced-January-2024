//closure
function create(words){
   const container = document.getElementById('content');

   for (let word of words){
      const div = document.createElement('div');
      const p = document.createElement('p');
      p.textContent = word;
      p.style.display = 'none';
      div.appendChild(p);
      container.appendChild(div);

      div.addEventListener('click', show);
   
   function show(){
      p.style.display = '';
      }
   }
}

// function create(words) {
//    const contentRef = document.getElementById("content");
//    for (let word of words){
//       let divEl = document.createElement("div");

//       let pEl = document.createElement("p");
//       pEl.textContent = word;
//       pEl.style.display = "none";

//       divEl.addEventListener("click", clickHandler);

//       divEl.appendChild(pEl);
//       contentRef.appendChild(divEl);
//    }
//    function clickHandler(event){
//       let target = event.currentTarget;

//       let children = target.children;
//       let p = children[0];
//       p.style.display = p.style.display === "none" ? "block" : "none";
//    }
// }