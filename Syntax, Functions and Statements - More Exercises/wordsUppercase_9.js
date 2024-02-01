function wordUppercase(text){
    //[^a-zA-Z0-9]+
    return text.split(/[^a-zA-Z0-9]+/)
        .join(" ")
        .trim()
        .split(" ")
        .map(x => x.toUpperCase())
        .join(", ");
}
console.log(wordUppercase);