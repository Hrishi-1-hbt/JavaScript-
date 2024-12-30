//RANDOM PASSWORD GENERATER

function generatePassword(length, includeLowercase, includeUppercas,includeNumbers, includeSymbols){
    
    const lowecaseChar = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChar = "0123456789";
    const symbolChar = "!@#$%^&*()_+-=";

    let allowedChars ="";
    let password ="";
    allowedChars += includeLowercase ? lowecaseChar: "";
    allowedChars += includeUppercas ? uppercaseChar: "";
    allowedChars += includeNumbers ? numberChar: "";
    allowedChars += includeSymbols ? symbolChar: "";

   if(length <=0){
    return`(password length must be atleast 1)`;
   }
   if(allowedChars.length === 0){
    return `(At least 1 set of character to be selected)`;
   }
   for(let i=0; i<length; i++){
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
}
  
    
    return password;
}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercas = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength,
                                 includeLowercase,
                                 includeUppercas,
                                 includeNumbers,
                                 includeSymbols);

         console.log(`generated Password : ${password} `);