function encryptText() {
    var message = document.getElementById("message").value.toUpperCase();
    var key = parseInt(document.getElementById("key").value);
    var cipherText = "";

    for(let i = 0; i < message.length; i++) {
        if(message[i].match(/[A-Z]/)) {
            var charCode = message.charCodeAt(i);
            var encryptCode = ((charCode - 65 + key)  % 26 + 65)
            cipherText += String.fromCharCode(encryptCode);
        }
        else {
            cipherText += message[i];
        }
    }
    document.getElementById("plainText").innerText = "Plain Text: ";
    document.getElementById("resultText").innerText = "Cipher Text: ";
    document.getElementById("result").value = cipherText;
}

function decryptText() {
    var cipherText = document.getElementById("message").value.toUpperCase();
    var key = parseInt(document.getElementById("key").value);
    var message = "";

    for(let i = 0; i < cipherText.length; i++) {
        if(cipherText[i].match(/[A-Z]/)) {
            var charCode = cipherText.charCodeAt(i);
            var decryptCode = ((charCode - 65 - key + 26) % 26) + 65;
            message += String.fromCharCode(decryptCode);
        }
        else {
            message += cipherText[i];
        }
    }
    document.getElementById("plainText").innerText = "Cipher Text: ";
    document.getElementById("resultText").innerText = "Original Text: ";
    document.getElementById("result").value = message;
}