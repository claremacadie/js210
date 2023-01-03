/*
P
Create a function that takes a string and returns a new string with each
letter rotated by 13 spaces.

E
Case-sensitive
Only letters should be rotated

D
Input - string
Return - string

A
Create a helper function to determine if a character is lower, uppper, or neither case, determineCase
Create a helper function that takes a lowercase letter and returns rotated by 13 lowercase letter, rot13Lower
Same for uppercase letter, rot13Upper

=Main function=
Create newStr as empty string to store rotated characters
Iterate from 0 to length of input string, i
  Use determineCase to find case of string[i] char
    if lowercase, use rot13Lower to get new char, append to newStr
    if uppercase, use rot13Upper to get new char, append to newStr
    otherwise append char to newStr
Return newStr
*/

const LOWER_ASCII_START = 'a'.charCodeAt();
const LOWER_ASCII_MID = LOWER_ASCII_START + 13;
const LOWER_ASCII_FINISH = 'z'.charCodeAt();
const UPPER_ASCII_START = 'A'.charCodeAt();
const UPPER_ASCII_MID = UPPER_ASCII_START + 13;
const UPPER_ASCII_FINISH = 'Z'.charCodeAt();

function determineCase(char) {
  let charAscii = char.charCodeAt();
  if (charAscii >= LOWER_ASCII_START && charAscii <= LOWER_ASCII_FINISH) {
    return 'lower';
  } else if (charAscii >= UPPER_ASCII_START && charAscii <= UPPER_ASCII_FINISH) {
    return 'upper'
  } else {
    return 'neither';
  }
}

function rot13Lower(char) {
  const ROTATION_SHIFT = 13;
  let charAscii = char.charCodeAt();
  if (charAscii < LOWER_ASCII_MID) {
    return String.fromCharCode(charAscii + ROTATION_SHIFT);
  } else {
    return String.fromCharCode(charAscii - ROTATION_SHIFT);
  }
}

function rot13Upper(char) {
  const ROTATION_SHIFT = 13;
  let charAscii = char.charCodeAt();
  if (charAscii < UPPER_ASCII_MID) {
    return String.fromCharCode(charAscii + ROTATION_SHIFT);
  } else {
    return String.fromCharCode(charAscii - ROTATION_SHIFT);
  }
}

function rot13(string) {
  let newStr = '';
  for (let idx = 0; idx < string.length; idx++) {
    let char = string[idx];
    let charCase = determineCase(char);
    switch (charCase) {
    case 'lower':
      char = rot13Lower(char);
      break;
    case 'upper':
      char = rot13Upper(char);
      break;
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
