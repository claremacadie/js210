function rot13(string) {
  const LOWER_ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
  const UPPER_ALPHABET = LOWER_ALPHABET.toUpperCase();
  const ALPHABET_LENGTH = LOWER_ALPHABET.length;
  const ROTATION_SHIFT = 13;
  let newStr = '';

  for (let idx = 0; idx < string.length; idx++) {
    let char = string[idx];
    
    if (LOWER_ALPHABET.includes(char)) {
      let currentIndex = LOWER_ALPHABET.indexOf(char);
      let newIndex = (currentIndex + ROTATION_SHIFT) % ALPHABET_LENGTH;
      char = LOWER_ALPHABET[newIndex];
    } else if (UPPER_ALPHABET.includes(char)) {
      let currentIndex = UPPER_ALPHABET.indexOf(char);
      let newIndex = (currentIndex + ROTATION_SHIFT) % ALPHABET_LENGTH;
      char = UPPER_ALPHABET[newIndex];
    }

    newStr += char;
  }

  return newStr;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
// logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));
// logs:
// Teachers open the door, but you must enter by yourself.
const foobar4 = "[\\]^_`";
console.log(rot13(foobar4) === foobar4);

const foobar5 = "{|}~";
console.log(rot13(foobar5) === foobar5);
