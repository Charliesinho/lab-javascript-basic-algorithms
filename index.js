// Iteration 1: Names and Input
const hacker1 = "Charlie";
const hacker2 = "Diana";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
  }
  if (hacker2.length > hacker1.length) {
    console.log(`The driver has the longest name, it has ${hacker2.length} characters`);
  }
  else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
  }

// Iteration 3: Loops
// 3.1
let letters = ``;
for (let i = 0; i < hacker1.length; i++) {
  letters += ` ${hacker1[i].toUpperCase()}`;
}
console.log(`${letters}`);


//3.2
let lettersB = ``;
for (let w = hacker1.length - 1; w >= 0; w--) {
  lettersB += `${hacker1[w].toLowerCase()}`;
}
console.log(`${lettersB}`);

//3.3
let first = 0;
let second = 0;
let who = 0;
let dictionary = `ABCDEFGHIJKLMNOPQRSTUVWYZ`;
for (let e = 0; e < dictionary.length; e++) {
  if (`${hacker1[0]}` == `${dictionary[e]}`) {
    first = e;
  }
  else if (`${hacker2[0]}` == `${hacker1[0]}`) {
    who = 1;
  }
}

for (let a = 0; a < dictionary.length; a++) {
  if (`${hacker2[0]}` == `${dictionary[a]}`) {
    second = a;
  }
  else if (`${hacker2[0]}` == `${hacker1[0]}`) {
    who = 1;
  }
}
if (first < second) {
  console.log(`Yo, the navigator goes first definitely.`)
}
else if (first > second) {
  console.log(`The driver's name goes first.`);
}
else {
  console.log(`What?! You both have the same name?`);
}

//Bonus 1
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin viverra, velit vitae laoreet tincidunt, enim sem consequat quam, id pharetra ligula erat nec turpis. Donec in augue ante. Aenean dignissim, risus non semper dictum, nunc odio condimentum purus, at finibus mauris urna eu erat. Vestibulum sapien nisi, volutpat eget nunc in, faucibus consequat mauris. Nullam ullamcorper tincidunt finibus. Etiam ex lorem, ultrices quis augue ut, maximus sollicitudin metus. Nunc semper elementum erat, at eleifend libero feugiat ac. Vestibulum sed mi id augue mattis pulvinar vitae vitae neque. Aliquam tempor consequat tortor tempor blandit. Pellentesque enim tellus, laoreet nec vestibulum sed, tempor a leo et.

Sed aliquam libero magna, sed luctus velit ullamcorper ac. Nam sed lorem sed dui volutpat pulvinar. Donec efficitur risus quis leo feugiat, at consequat purus ornare. Nunc et nisi euismod, feugiat turpis at, consectetur tortor. Morbi fringilla mattis est sed dictum. Nunc ut nisi faucibus, sodales risus in, vulputate quam. Ut vel pellentesque libero.

Vestibulum eu dolor et justo porta porta. Ut dapibus urna vel aliquet convallis. Nunc ac magna diam. Integer pulvinar, libero ut fringilla convallis, dolor nisl pellentesque lectus, id porta erat enim eget lectus. In vitae urna porttitor, convallis augue nec, vulputate libero. Nulla vitae magna tincidunt velit vehicula dignissim sit amet ut nisl. Praesent venenatis dictum luctus.`

 function countWordsString(text){

            var counter = 1;

            // Change multiple spaces for one space
            text=text.replace(/[\s]+/gim, ' ');

            // Lets loop through the string and count the words
            text.replace(/(\s+)/g, function (text) {
               // For each word found increase the counter value by 1
               counter++;
            });

            return counter;
        }
count = countWordsString(longText);
console.log(count);

let k;
let l;
let h;
let EtCounter = 0;
for (i = 0; i < longText.length; i++) {
  h = longText[i];
  k = longText[i+1];
  l = h + k;
  if (`${l}` == `et`) {
    EtCounter += 1;    
  }
}
console.log(EtCounter);

//Bonus 2
let reversedWord = ``; 
let phraseToCheck = `amor, Roma`;

function palindromeCheck(word) {
  word=word.replace(/[\s]+/gim, '');
  word=word.replace(/[^a-z0-9]/gi, '');
  return word;
}
pali = palindromeCheck(phraseToCheck);

for (let w = pali.length - 1; w >= 0; w--) {
  reversedWord += `${pali[w]}`;
}
if (`${pali.toLowerCase()}` === `${reversedWord.toLowerCase()}`){
  console.log(`It is!`);
} else {
  console.log(`Nope!`)
}