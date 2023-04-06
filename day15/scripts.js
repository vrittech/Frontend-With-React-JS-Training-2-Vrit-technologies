const numbers = [null, 1, 2, 13, 9, 17, undefined, 19, 33, 55, -50];
// Check prime numbers using arrays
const checkPrimeNumbers = (number) => {
   if (number === null || number === undefined) {
      return;
   } else if (number === 1 || number === 2 || number === 0) {
      document.getElementById('output').value = number + ' is not a prime number';
      console.log(number, ' is not a prime number');
   } else if (number < 0) {
      document.getElementById('output').value = 'Negative number are not allowed';
      console.log('Negative number are not allowed');
   } else {
      for (let i = 2; i < number; i++) {
         if (number % i === 0) {
            document.getElementById('output').value = number + 'not a prime number';
            console.log(number, 'not a prime number')
            return;
         }
      }
      document.getElementById('output').value = number + 'is a prime number';
      console.log(number, 'is a prime number')
   }
}
// numbers.map((number) => {
//    console.log(number);
//    checkPrimeNumbers(number);
// })

//passing arrays to function parameter
// const checkPrimeNumberArray = (x) => {
//    x.map((number) => {
//       if (number === null || number === undefined) {
//          return;
//       } else if (number === 1 || number === 2 || number === 0) {
//          console.log(number, ' is not a prime number');
//       } else if (number < 0) {
//          console.log('Negative number are not allowed');
//       } else {
//          for (let i = 2; i < number; i++) {
//             if (number % i === 0) {
//                console.log(number, 'not a prime number')
//                return;
//             }
//          }
//          console.log(number, 'is a prime number')
//       }
//    });
// }


// checkPrimeNumberArray(numbers);
// checkPrimeNumberArray([2, 10, 55, 96, -100]);
// for (let i = 0; i <= numbers.length - 1; i++) {
//    console.log(numbers[i])
// }


// checkPrimeNumbers(1);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = []
const evenNumbers = []
// console.log(nums[9])

const checkevenOdd = (testNumber) => {
   console.log(oddNumbers)
   console.log(evenNumbers)
   for (let i = 0; i < testNumber.length; i++) { // 0 < 10}
      if (testNumber[i] % 2 === 0) {
         evenNumbers.push(testNumber[i]);
      }
      else {
         oddNumbers.push(testNumber[i]);
      }
   }
   console.log(oddNumbers)
   console.log(evenNumbers)

}

checkevenOdd(nums);

//Get element by id
//Get elements by class name
//Get elements by tag name
//Query selector
//Query selector all

//Get element by id

const buttonClick = document.getElementById('btn-check-prime');

buttonClick.addEventListener('click', (event) => {
   event.preventDefault();

   const number = document.getElementById('prime-number').value;
   checkPrimeNumbers(number);
});