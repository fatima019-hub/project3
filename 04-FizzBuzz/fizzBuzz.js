// write your func here

function fizzbuzz() {
  for (let index = 1; index < 101; index++) {
    if (index % 3 == 0 && index % 5 == 0) console.log(index, "FizzBuzz");
    else if (index % 3 == 0) console.log(index, "Fizz");
    else if (index % 5 == 0) console.log(index, "Buzz");
  }
}
fizzbuzz();
