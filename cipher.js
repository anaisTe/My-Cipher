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
    },
    
    decode : (text_decode , offset_decode) =>{
    let decode_result = "";
        for (let i = 0; i < text_decode.length; i++) {
            let number = text_decode.charCodeAt(i);
            if (number >= 65 && number <= 90) {
            decode_result += String.fromCharCode((number-90-parseInt(offset_decode))%26+90);
            }else if (number === 32) {
            decode_result += " ";
            }else if (number >= 97 && number <= 122) {
            decode_result += String.fromCharCode((number-122-parseInt(offset_decode))%26+122);
            }else{
            decode_result += console.log("olvidaste colocar tu mensaje");
            }
        }
    return decode_result
    }
}