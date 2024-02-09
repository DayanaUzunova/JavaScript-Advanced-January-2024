function focused() {
    let inputElements = document.querySelectorAll('div div input');

    // With assistance from Soft-Uni forum - https://softuni.bg/forum/30364/05-highlight-active
    for (let element of inputElements) {
        element.addEventListener('focus', (e) => {
            // set 'focused' class for click event element
            e.target.parentNode.classList.add('focused');            
        });

        element.addEventListener('blur', (e) => {
            // remove 'focused' class
            e.target.parentNode.classList.remove('focused');
        });
    }
}