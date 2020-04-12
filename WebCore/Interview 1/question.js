// Interview 1
// Write a method that will compute a square root of a number, example input 4, output 2
// if it's valid returning an integer
// 0 > x > infinity

const getSquareRoot = (num) => {
  let i = 0;
  while (i * i <= num) {
    if (i * i === num) {
      return i;
    }
    i++;
  }
  return false;
};

console.log(getSquareRoot(5));
console.log(getSquareRoot(9)); //return 3

// refactoring to binary search
//
// current = num /2
// current^2 > num
// current = current /2
