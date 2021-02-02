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

function harmlessRansomNote(note, text) {
  let arr = text.split(" ");
  let r = true;
  note.split(" ").forEach((el) => {
    if (arr.includes(el)) {
      let temp = arr.indexOf(el);
      arr.splice(temp, 1);
    } else {
      return (r = false);
    }
  });
  return r;
}
harmlessRansomNote("aa aa", "aab aa");
