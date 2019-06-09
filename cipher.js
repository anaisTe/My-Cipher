window.cipher = { 
    encode : (text_code , offset_code) => { 
     let text_result = "";
        for (let i = 0; i < text_code.length; i++) {
            let numb = text_code.charCodeAt(i);
            if (numb >= 65 && numb <= 90) {
                text_result += String.fromCharCode((numb-65+parseInt(offset_code))%26+65);
            }else if (numb === 32) {
                text_result += " "
            }else if (numb >= 97 && numb <= 122) {
                text_result += String.fromCharCode((numb-97+parseInt(offset_code))%26+97);
            }else{
                text_result = console.log("olvidaste colocar tu mensaje");
            }
        }   
    return text_result
    }
}