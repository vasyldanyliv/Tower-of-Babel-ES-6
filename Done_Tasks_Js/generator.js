const max = process.argv[2];
let FizzBuzz = function*(){
 let current = 0;
 while (current < max) {
    current ++;
    let result;
   let divisibleOfThree = current % 3 === 0;
   let divisibleOfFive = current % 5 === 0;
   if (divisibleOfThree && divisibleOfFive)  { result = "FizzBuzz" }
     else if (divisibleOfThree)  { result = "Fizz" }
     else if (divisibleOfFive)  { result = "Buzz" }
     else {result =  current }
   yield result;
  }
 }();

 for (var n of FizzBuzz) {
 console.log(n);
}
