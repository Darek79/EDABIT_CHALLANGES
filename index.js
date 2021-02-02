/**----------------------
 **      ALGORITHMS-JS
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

console.log(isPrime(primes, 5));
