console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return 'Hello, ' + name + "!";
}
// Remember to call the function to test
console.log('helloName test -', helloName("Jo"));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;
  // return firstNumber + secondNumber;
}
console.log('addNumbers test with 6 & 4 -', addNumbers(6, 4));

// 4. Function to multiply three numbers & return the result
function multiplyThree(numOne, numTwo, numThree ) {
  return numOne*numTwo*numThree;
}
console.log('multiplyThree test with 3, 6, 9 -', multiplyThree(3,6,9));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  return number>0 ? true : false;
}

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  if(array.length === 0) return undefined;
  return array[array.length-1];
}
let funArray = ['first', 'second', 'last'];
console.log('getLast test with filled array -', getLast(funArray));
let notFunArray = [];
console.log('getLast test with empty array -', getLast(notFunArray));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  for(const item of array) {
    if(item === value) return true;
  }
  return false;
}
let weaponsArray = ['scythe', 'longsword', 'greatsword', 'battle axe'];
console.log('find test with weapons; looking for greatsword; return true -', find('greatsword', weaponsArray));
console.log('find test with weapons; looking for scimitar; return false -', find('scimitar', weaponsArray));
let numArray = [25, 34, 88, 56];
console.log('find test with numbers; looking for 45; return false -', find(45, numArray));
console.log('find test with numbers; looking for 88; return true -', find(88, numArray));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if(letter === string[0]) return true;
  return false;
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( array ) {
  let sum = 0;
  for(const num of array) {sum += num;}
  return sum;
}
console.log('sumAll test -', sumAll(numArray));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositives(array) {
  let retArray = [];
  for(const num of array) {
    if(num > 0) retArray.push(num);
  }
  return retArray;
}
let mixNumArray = [2, -3, 6, -1, -9, 0, 7, 9];
console.log('mixNumArray is', mixNumArray);
console.log('allPositives test returns only positive numbers -', allPositives(mixNumArray));
console.log('array after function should be same as before', mixNumArray);

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// Create a function that takes an integer as an argument and 
// returns "Even" for even numbers or "Odd" for odd numbers.

function evenOdd(num) {
  return num%2 ? "Odd" : "Even";
}
console.log('-- Return values for evenOdd --');
console.log('3 is', evenOdd(3));
console.log('8 is', evenOdd(8));
console.log('19 is', evenOdd(19));
console.log('32 is', evenOdd(32));