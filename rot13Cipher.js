function rot13Char(char, alphabet) {
  const ROTATION_SHIFT = 13;
  let currentIndex = alphabet.indexOf(char);
  let newIndex = (currentIndex + ROTATION_SHIFT) % alphabet.length;
  return alphabet[newIndex];
}

function rot13(string) {
  const LOWER_ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
  const UPPER_ALPHABET = LOWER_ALPHABET.toUpperCase();
  let newStr = '';

  for (let idx = 0; idx < string.length; idx++) {
    let char = string[idx];
    
    if (LOWER_ALPHABET.includes(char)) {
      char = rot13Char(char, LOWER_ALPHABET)
    } else if (UPPER_ALPHABET.includes(char)) {
      char = rot13Char(char, UPPER_ALPHABET)
    }

    newStr += char;
  }

  return newStr;
}
