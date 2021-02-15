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

// function binarySearcch(primes, num) {
//   let left = 0;
//   let right = primes.length - 1;

//   while (left <= right) {
//     let middle = Math.floor((left + right) / 2);
//     if (primes[middle] === num) {
//       return true;
//     }
//     if (num > primes[middle]) {
//       left = middle + 1;
//     } else if (num < primes[middle]) {
//       right = middle - 1;
//     }
//   }
//   return false;
// }
// console.log(binarySearcch(primes, 3));
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

// console.log(ceaserCipher("javascript", -900));

/**======================
 **      REVERSE WORDS
 *========================**/

// const w = "this is a string of words";

// function reverseWords(str) {
//   return str
//     .split(" ")
//     .map((el) => {
//       return el.split("").reverse().join(' ');
//     })
//     .join(",")
//     .replace(/ /g, "");
// }
// console.log(reverseWords("Coding Javascript"));

/**======================
 **      REVERSE ARRAY
 *========================**/

// function reverseFunction(arr) {
//   let n = arr.length - 1;
//   while (n >= 0) {
//     let temp = arr.pop();
//     arr.splice(arr.length - n, 0, temp);
//     n--;
//   }
//   return arr;
// }

// console.log(
//   reverseFunction(["d", "a", "r", "e", "k"])
// );

/**======================
 **      TWO SUM
 *========================**/

// const twoSum = (arr, sum) => {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === sum) {
//         res.push([arr[i], arr[j]]);
//       }
//     }
//   }
//   return res;
// };
// console.log(twoSum([1, 6, 4, 5, 3, 3], 7));

/**======================
 **      FIBONACI
 *========================**/

// const fibo = (n) => {
//   let a = 0;
//   let b = 1;
//   let f = 1;
//   let i = 2;
//   let res = 0;
//   while (i <= n) {
//     f = a + b;
//     a = b;
//     b = f;
//     i++;
//   }
//   return f;
// };

// console.log(fibonacci(9));

// const fibo = (n) => {
//   let f = 1;
//   let a = 0;
//   let b = 1;

//   while (n > 1) {
//     f = a + b;
//     a = b;
//     b = f;
//     n--;
//   }
//   return f;
// };
// console.log(fibo(9));

/**======================
 **      Sieve of Eratosthenes
 *========================**/

// const sieve = (n) => {
//   const arr = [...new Array(n + 1)].map((el, i) => i);

//   for (let i = 2; i <= arr.length; i++) {
//     if (i !== 2 && i % 2 === 0) {
//       arr.splice(i, 1, 0);
//     }
//     if (i % 3 === 0 && i !== 3) {
//       arr.splice(i, 1, 0);
//     }
//     if (i % 5 === 0 && i / 5 > 1) {
//       arr.splice(i, 1, 0);
//     }
//   }
//   console.log(arr);

//   return [...new Set(arr)].slice(2);
// };
// console.log(sieve(30));

var eratosthenes = function (n) {
  // Eratosthenes algorithm to find all primes under n
  var array = [],
    upperLimit = Math.sqrt(n),
    output = [];

  // Make an array from 2 to (n - 1)
  for (var i = 0; i < n; i++) {
    array.push(true);
  }

  // Remove multiples of primes starting from 2, 3, 5,...
  for (var i = 2; i <= upperLimit; i++) {
    if (array[i]) {
      for (var j = i * i; j < n; j += i) {
        array[j] = false;
      }
    }
  }

  // All array[i] set to true are primes
  for (var i = 2; i < n; i++) {
    if (array[i]) {
      output.push(i);
    }
  }

  return output;
};

console.log(eratosthenes(30));
/**======================
 **      EDABIT
 *========================**/

// function isPositiveDominant(a) {
//   let pos = [];
//   let neg = [];
//   [...new Set(a)].forEach((el) => {
//     if (el > 0) {
//       pos.push(el);
//     } else if (el < 0) {
//       neg.push(el);
//     }
//   });
//   return pos.length > neg.length;
//   console.log(pos, neg);
// }
// console.log(isPositiveDominant([1, 0, 0, -1]));
// // function numInStr(arr) {
//   return arr.filter((el) => {
//     if (el.match(/[0-9]/g)) {
//       return el;
//     }
//   });
// }
// console.log(numInStr(["1a", "a", "2b", "b"]));
// function oddishOrEvenish(num) {
//   let n = num
//     .toString()
//     .split("")
//     .reduce((acc, val) => acc + val * 1, 0);
//   console.log(n);
//   return n % 2 === 0 ? "Evenish" : "Oddish";
// }

// console.log(oddishOrEvenish(43));
// function areaOfCountry(name, area) {
//   return `${name} is ${(
//     parseFloat(area / 148940000) * 100
//   ).toFixed(2)}% of the total world's landmass`;
// }
// console.log(areaOfCountry("Russia", 17098242));
// function numberSquares(n) {
//   let res = 0;
//   while (n > 0) {
//     res += n * n;
//     n--;
//   }
//   return res
// }
// console.log(numberSquares(5));
// function findNthElement(a, n) {
//   return a[n - 1];
// }

// console.log(findNthElement([3, 4, 6, 2], 3));
// console.log(
//   findNthElement([0, 0, 9, 6, 3, 8, 7, 2], 5)
// );
