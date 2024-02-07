function solve() {
  let textInput = document.getElementById("input");
  let textOutput = document.getElementById("output");

  inputTextArr = textInput.value.split(/\.\s*/);//.split('.')
 
    inputTextArr = inputTextArr.filter(sentence => sentence.trim().length > 0)
    console.log(inputTextArr)
 
    let paragraphs = []
 
 
    if(inputTextArr.length > 0 && inputTextArr.length < 3){
      let paragraphText =  inputTextArr.slice(0,inputTextArr.length).join('. ') 
      if (!paragraphText.includes('.')) {
        paragraphText += '.'
      }
      let parapgraph = `<p>${paragraphText}</p>`
 
      textOutput.innerHTML += parapgraph
    }
    else if (inputTextArr.length >= 3) {
 
      for (let i = 0; i < inputTextArr.length; i+=3) {
      
        let paragraphText = inputTextArr.slice(i, i+3).join('. ')
        if (!paragraphText.includes('.')) {
        paragraphText += '.'
        }
        let paragraph = `<p>${paragraphText}</p>`
        paragraphs.push(paragraph)
 
      }
 
  paragraphs.forEach(p => {
    textOutput.innerHTML += p;
    })
  }
  textInput.value = ""
}