

//arrow function

const functionName = (num1, num2) => {
   return { num1, num2 };
}

console.log(functionName(1, 2));

//Anonymous function
(() => {
   console.log('Test unnamed function')
})();


// Comparison operator 
let x = 9;
let y = '3';
let z = '9';
//It checks only value
// console.log(x == y)
//It checks only value and type
// console.log(x === y)
// console.log(z >= x)
// console.log(z <= x)
console.log(19 % 2 === 0)


// Conditional Statement
let number;
if (number === undefined || number === null) {
   console.log('Number is undefinde. Please provide a number')
}
else if (number === 0) {
   console.log('Number is zero')
} else if (number % 2 === 0) {
   console.log(`Even Number ${number}`);
}
else {
   console.log(`Odd Number ${number}`);
}

// Looping:- specific block of code multiple times run
// for (let i = 1; i <= 10; i++) {
//    console.log('Execute this code', i);
// }
let i = 11;

// while (i <= 10) {
//    console.log('Execute this code', i);
//    i++;
// }
// do {
//    console.log('This code run once at least');
// }
// while (i <= 10) {
//    console.log('Execute this code', i);
//    i++;
// }

const vritStudents = ['parbat', '', 'Test', '', 'dipesh', ''];
vritStudents[i]
const actualData = [];

for (let i = 1; i <= vritStudents.length; i++) {
   if (vritStudents[i] === 'parbat' ||
      vritStudents[i] === 'sudeep' ||
      vritStudents[i] === 'bhuwan'
      || vritStudents[i] === 'dipesh') {
      console.log(vritStudents[i], ' studies in this batch');
   } else {
      console.log(vritStudents[i], ' doesnot studies in this batch');
   }
}
// Map function
vritStudents.map((value, index) => {
   if (a !== '') {
      actualData.push(a);
   }
});

console.log(actualData)

// 5,7,13
// Write a function to check whether that number is prime number or not


// string arrays objects



