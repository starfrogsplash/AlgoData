/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

const caesarCipher = (word: string, key:number) => {
    let decipher = '';
    //decipher each letter

    for(let i = 0; i < word.length; i++){
        const isUpperCase = word[i] === word[i].toUpperCase();
      //if letter is uppercase then add uppercase letters
      const newCharCode = word.charCodeAt(i) + key
        //A-Z = 65-90
        //a-z = 97-122
      if(isUpperCase){
        const newNumA = newCharCode
        const newNumB = (newCharCode - 65) % 26 + 65
        const newUpperLetterA = String.fromCharCode(newCharCode);
        const newUpperLetterB = String.fromCharCode((newCharCode - 65) % 26 + 65);
        decipher += newUpperLetterB
      }else{
        //else add lowercase letters
        decipher += String.fromCharCode((newCharCode - 97) % 26 + 97);
      }
    }
    
    
    return decipher;
}


    //if letter is uppercase then add uppercase letters
    // if(isUpperCase(str[i])){
    //     decipher += String.fromCharCode((str.charCodeAt(i) + key - 65) % 26 + 65);
    //   }else{
    //     //else add lowercase letters
    //     decipher += String.fromCharCode((str.charCodeAt(i) + key - 97) % 26 + 97);
    //   }

export {
    caesarCipher
}