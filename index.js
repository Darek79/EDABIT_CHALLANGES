/**----------------------
 **      BINARY SEARCH
 *------------------------**/
var primes = [
  2,
  3,
  5,
  7,
  11,
  13,
  17,
  19,
  23,
  29,
  31,
  37,
  41,
  43,
  47,
  53,
  59,
  61,
  67,
  71,
  73,
  79,
  83,
  89,
  97,
];
function isPrime(primes, num) {
  let left = 0;
  let right = primes.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    console.log(middle, primes[middle]);
    if (num === primes[middle]) {
      return "yes";
    }
    num > primes[middle]
      ? (left = middle + 1)
      : (right = middle - 1);
  }
  return "no";
}

//console.log(isPrime(primes, 5));

/**----------------------
 **      FIZZ BUZZ
 *------------------------**/

function fizzBuzz(num) {
  let r = 1;
  while (r <= num) {
    if (r % 3 === 0 && r % 5 === 0) {
      console.log("FizzBuzz", r);
    } else if (r % 3 === 0) {
      console.log("Fizz", r);
    } else if (r % 5 === 0) {
      console.log("Buzz", r);
    }
    r++;
  }
}

// console.log(fizzBuzz(20));
/**----------------------
 **      HARMLESS RANSOM NOTE
 *------------------------**/

// function harmlessRansomNote(note, text) {
//   let arr = text.split(" ");
//   let r = true;
//   note.split(" ").forEach((el) => {
//     if (arr.includes(el)) {
//       let temp = arr.indexOf(el);
//       arr.splice(temp, 1);
//     } else {
//       return (r = false);
//     }
//   });
//   return r;
// }
// harmlessRansomNote("aa aa", "aab aa");

/**----------------------
 **      IS PALINDROME
 *------------------------**/

// function isPalindrome(str) {
//   let strO = str
//     .trim()
//     .toLowerCase()
//     .replace(/[^\w\s]/gi, "")
//     .replace(/ /g, "");
//   let strR = str
//     .trim()
//     .toLowerCase()
//     .replace(/[^\w\s]/gi, "")
//     .replace(/ /g, "")
//     .split("")
//     .reverse()
//     .join("");
//   console.log(strR);
//   return strO === strR;
// }

// console.log(
//   isPalindrome("Eva, can I see bees in a cave?")
// );

/**======================
 **      CEASER CIPHER
 *========================**/

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function ceaserCipher(str, num) {
  let alpL = alphabet.length - 1;
  return str.split("").map((el) => {
    let temp = alphabet.indexOf(el);
    if (temp <= alpL && temp + num < alpL) {
      return alphabet[temp + num];
    } else {
      let temp1 = Math.abs(alpL - temp - num);
      if (temp1 === 0) {
        return alphabet[alphabet.length - 1];
      }
      return alphabet[temp1 - 1];
    }
    console.log(temp);
  });
}

console.log(ceaserCipher("bigcar", 16));
