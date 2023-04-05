let a = 10;
let b = 30;
// let sum = x + y;


// let arrayName = [
//    {
//       firstName: "subas",
//       age: 14,
//       isStudying: true
//    },
//    true,
//    "THis is frontend class"
//    , true, {
//       prodName: "Laptop",
//    }];
// console.log(student1)
// console.log(arrayName[0])
// console.log(arrayName[1])
// console.log(arrayName[2])
// array last index
// console.log(arrayName[arrayName.length - 1])


// function declaration
// let sum;
// sum = 10;


// let data

function addSumSubOfTwoDigits(a, b) {
   let sum = a + b;
   let sub = a - b;
   let obj = {
      addition: sum
      , subtraction: sub
   }
   return obj;

}

let sumSUb1 = addSumSubOfTwoDigits(2, 3);
let sumSUb2 = addSumSubOfTwoDigits(30, 20);
let sumSUb3 = addSumSubOfTwoDigits(20, 30);
let sumSUb4 = addSumSubOfTwoDigits(21, 3222);
// console.log(typeof sumFN)

// var sum;

// Write a program to return remained in following ways using function


function returnRemainder(quotient, divisor) {
   let remainder = quotient % divisor;
   return {
      Quotient: quotient,
      Divisor: divisor,
      Remainder: remainder
   }
}

console.log(returnRemainder(105, 10))
// {Quotient: 105, Divisor: 10,Remainder: 5}

// Conditional Operators