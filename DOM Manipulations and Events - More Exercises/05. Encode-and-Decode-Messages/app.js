function encodeAndDecodeMessages() {
    let encodeBtn = document.querySelectorAll('button')[0];
    let dencodeBtn = document.querySelectorAll('button')[1];
    let messageInput = document.querySelectorAll('textarea')[0];
    let messageOutput = document.querySelectorAll('textarea')[1];

    debugger
    encodeBtn.addEventListener('click', encodeMessages);
    dencodeBtn.addEventListener('click', decodeMessages);

    function encodeMessages() {
        let theText = messageInput.value;
        let encodedMessage = '';
        for (let i = 0; i < theText.length; i++) {
            encodedMessage += String.fromCharCode(ascii(`${theText[i]}`) + 1);
        }
        messageInput.value = '';
        messageOutput.value = encodedMessage;
    }

    function decodeMessages() {
        let theText = messageOutput.value;
        let decodedMessage = '';
        for (let i = 0; i < theText.length; i++) {
            decodedMessage += String.fromCharCode(ascii(`${theText[i]}`) - 1);
        }
        messageOutput.value = decodedMessage;
    }

    function ascii(a) {
        return a.charCodeAt(0);
    }
}