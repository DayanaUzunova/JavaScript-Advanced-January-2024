function validate() {
    var reg = /^[a-z]+@[a-z]+\.[a-z]+$/;;
    const inputField = document.getElementById('email');
    inputField.addEventListener('change', function() {
        if (reg.test(inputField.value)) {
            inputField.classList.remove('error');
        } else {
            inputField.classList.add('error');
        }
    });
}