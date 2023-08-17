function hello() {
	return "hello edabit.com"
}
function convert(minutes) {
	return minutes*60
}
function caesarCipher(str, shift) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
  
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
  
      if (char.match(/[a-zA-Z]/)) {
        const isUpperCase = char === char.toUpperCase();
        char = char.toLowerCase();
        const index = (alphabet.indexOf(char) + shift) % 26;
  
        if (index >= 0) {
          char = isUpperCase ? alphabet[index].toUpperCase() : alphabet[index];
        } else {
          char = isUpperCase ? alphabet[26 + index].toUpperCase() : alphabet[26 + index];
        }
      }
  
      result += char;
    }
  
    return result;
  
  
  // Example usage:
  const encryptedText = caesarCipher('Hello, World!', 3);
  console.log(encryptedText); // Output: 'Khoor, Zruog!'
  
  }