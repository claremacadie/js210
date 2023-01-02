// // Building strings

// const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed \
//   ligula at risus vulputate faucibus. Aliquam venenatis nibh ut justo dignissim \
//   dignissim. Proin dictum purus mollis diam auctor sollicitudin. Ut in bibendum \
//   ligula. Suspendisse quam ante, dictum aliquam tristique id, porttitor pulvinar \
//   diam. Maecenas blandit aliquet ipsum. Integer vitae sapien sed nulla rutrum \
//   hendrerit ac a urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.';

// console.log(paragraph);

// // Conditionals Part 1

// const myBoolean = true;
// const myString = 'hello';
// const myArray = [];
// const myOtherString = '';

// if (myBoolean) {
//   console.log('Hello');
// }

// if (!myString) {
//   console.log('World');
// }

// if (!!myArray) {
//   console.log('World');
// }

// if (myOtherString || myArray) {
//   console.log('!');
// }

// // String Assignment

// // let name = 'Bob';
// // const saveName = name;
// // name = 'Alice';
// // console.log(name, saveName);

// const name = 'Bob';
// const saveName = name;
// name.toUpperCase();
// console.log(name, saveName);

// // Arithmetic Integer

// const rlSync = require("readline-sync");
// console.log('Enter the first number:\n');
// let firstNumber = Number(rlSync.prompt());
// console.log('Enter the second number:\n');
// let secondNumber = Number(rlSync.prompt());

// console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
// console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
// console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
// console.log(`${firstNumber} / ${secondNumber} = ${Math.floor(firstNumber / secondNumber)}`);
// console.log(`${firstNumber} ** ${secondNumber} = ${firstNumber ** secondNumber}`);

// Counting the Numbeer of Characters

const rlSync = require("readline-sync");
console.log("Please enter a phrase: ");
let phrase = rlSync.prompt();
phraseNoSpaces = phrase.replace(/\s/g, '');
console.log(phraseNoSpaces);

console.log(`There are ${phraseNoSpaces.length} characters in "${phrase}".`);
