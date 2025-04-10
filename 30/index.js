// Random Password Generator

function generatePassword (passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols ){

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*_+=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(passwordLength <= 0){
        return '(Your password length must at least be 1.)'
    }

    if(allowedChars.length === 0){
        return '(You must select at least one set of characters.)'
    }

    for (let i = 0; i < passwordLength; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

// const password = "";

const password = generatePassword(passwordLength,
                                         includeLowercase,
                                         includeUppercase,
                                         includeNumbers,
                                         includeSymbols);

console.log(`Generated Password: ${password}`)