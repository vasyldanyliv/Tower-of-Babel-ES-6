const max = process.argv[2];
let FizzBuzz = {
 [Symbol.iterator]() {
  let current = 0;
  return {
   next() {
    current ++;
    if (current <= max){
     let divisibleOfThree = current % 3 === 0;
     let divisibleOfFive = current % 5 === 0;

     if (divisibleOfThree && divisibleOfFive) return { done: false, value: "FizzBuzz" };
     else if (divisibleOfThree) return { done: false, value: "Fizz" };
     else if (divisibleOfFive) return { done: false, value: "Buzz" };
     return { done: false, value: current };
    }

   }
  }
 }
};

for (let n of FizzBuzz) {
 console.log(n);
}
