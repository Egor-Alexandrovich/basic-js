const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isDirectMachine){
    this.directMachine = isDirectMachine
}
encrypt(string, stringKeyword) {
    if( !(string && stringKeyword)) throw Error
    const dict = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let index = 0;
    let count = 0;
    let  result = '';
    while (index < string.length) {
        let letterString = string[index];
        if(/^[a-zA-Z]$/.test(letterString)) {
            if (count === stringKeyword.length) { count = 0}
            let letterStringKeyword = stringKeyword[count];
            const indexDict = (dict.indexOf(letterString) + dict.indexOf(letterStringKeyword))%52;
            result += dict[indexDict];
            count +=1;
        }
        else {result += letterString }
        index +=1;
    }
    const termResult = result.toUpperCase();
    if(this.directMachine === false) { return termResult.split('').reverse().join('')}
    else { return termResult;} 
    
}

decrypt(encryptedMessage, stringKeyword) {
    if( !(encryptedMessage && stringKeyword)) throw Error
    const dict = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let index = 0;
    let count = 0;
    let  result = '';
    while (index < encryptedMessage.length) {
        let letterString = encryptedMessage[index];
        if(/^[a-zA-Z]$/.test(letterString)) {
            if (count === stringKeyword.length) { count = 0}
            let letterStringKeyword = stringKeyword[count];
            const indexDict = (dict.indexOf(letterString) + 52 - dict.indexOf(letterStringKeyword))%52;
            result += dict[indexDict];
            count +=1;
        }
        else {result += letterString }
        index +=1;
    }
    const termResult = result.toUpperCase();
    if(this.directMachine === false) { return termResult.split('').reverse().join('') }
    else { return termResult; }
}
}

module.exports = VigenereCipheringMachine;
