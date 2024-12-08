// first repository code
//console.log("hello");
function isPrime(num) {
    if (num <= 1) return false; // 0 and 1 are not prime
    if (num <= 3) return true; // 2 and 3 are prime numbers
    if (num % 2 === 0 || num % 3 === 0) return false; // divisible by 2 or 3

    // Check for factors up to the square root of the number
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}console.log(isPrime(59)); 