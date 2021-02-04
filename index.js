/**----------------------
 **      BINARY SEARCH
 *------------------------**/
// var primes = [
//   2,
//   3,
//   5,
//   7,
//   11,
//   13,
//   17,
//   19,
//   23,
//   29,
//   31,
//   37,
//   41,
//   43,
//   47,
//   53,
//   59,
//   61,
//   67,
//   71,
//   73,
//   79,
//   83,
//   89,
//   97,
// ];
// function isPrime(primes, absNum) {
//   let left = 0;
//   let right = primes.length - 1;
//   while (left <= right) {
//     let middle = Math.floor((left + right) / 2);
//     console.log(middle, primes[middle]);
//     if (absNum === primes[middle]) {
//       return "yes";
//     }
//     absNum > primes[middle]
//       ? (left = middle + 1)
//       : (right = middle - 1);
//   }
//   return "no";
// }

//console.log(isPrime(primes, 5));

/**----------------------
 **      FIZZ BUZZ
 *------------------------**/

// function fizzBuzz(absNum) {
//   let r = 1;
//   while (r <= absNum) {
//     if (r % 3 === 0 && r % 5 === 0) {
//       console.log("FizzBuzz", r);
//     } else if (r % 3 === 0) {
//       console.log("Fizz", r);
//     } else if (r % 5 === 0) {
//       console.log("Buzz", r);
//     }
//     r++;
//   }
// }

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

const alp = [
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

// function ceaserCipher(str, num) {
//   const absNum = Math.abs(num);
//   let alpL = alp.length - 1;
//   return str
//     .toLowerCase()
//     .split("")
//     .map((el) => {
//       let temp = alp.indexOf(el);
//       if (temp <= alpL && temp + absNum < alpL) {
//         return alp[temp + absNum];
//       } else {
//         let temp1 = Math.abs(
//           alpL - temp - absNum
//         );
//         if (temp1 === 0) {
//           return alp[alp.length - 1];
//         }
//         return alp[temp1 - 1];
//       }
//       console.log(temp);
//     });
// }
// console.log(alp.length - 13);
// function ceaserCipher(str, num) {
//   return str
//     .toLowerCase()
//     .replace(/ /gi, "")
//     .split("")
//     .map((el) => {
//       let temp = alp.indexOf(el);
//       let move = temp + (num % 26);
//       console.log(move);
//       if (move > 0 && move < alp.length) {
//         return alp[move];
//       } else if (move >= alp.length) {
//         return alp[move - alp.length];
//       } else if (move < 0) {
//         return alp[alp.length - Math.abs(move)];
//       }
//     });
// }

// console.log(ceaserCipher("bigcar", -16));
