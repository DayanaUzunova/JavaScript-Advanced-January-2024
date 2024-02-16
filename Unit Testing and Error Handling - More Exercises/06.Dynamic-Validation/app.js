function validate() {
    const inputRef = document.getElementById("email");
    inputRef.addEventListener("change", onChange);

    function onChange(e){
        let email = e.target.value;
        let pattern = /^[a-z0-9]+@[a-z0-9]+\.[a-z]+$/g;

        if(pattern.test(email)){
            e.target.classList.remove("error");
        }
        else {
            e.target.classList.add("error");
        }
    }
}