console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  console.log('Hello World!');
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `Hello, ${name}!`;
}

// Remember to call the function to test
console.log(helloName('Ilyas'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber) {
  // return firstNumber + secondNumber;
  console.log('In addNumbers:', firstNumber , secondNumber);
  return firstNumber + secondNumber;
}
console.log('Running addnumbers with 0.9 & 2.5:', addNumbers(0.9,2.5));

// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber ){
  console.log('In multiplyThree:', firstNumber , secondNumber, thirdNumber);
  return firstNumber * secondNumber * thirdNumber;
  
}
console.log('Running multiplyThree with 10 & 15 & 25:', multiplyThree(10,15,25));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
  else{
    return false;
}
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( arrays ) { 
  if (arrays.length > 0) { 
    return arrays[arrays.length - 1]; 
  } 
  else 
  { return undefined; 
  } 
  }
  console.log('geLast - should say 4', getLast([1, 2, 3, 4]));
  console.log('getLast - should say undefined', getLast([])); 

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]){
      return true;
    }
  }
      return false;
    }

console.log('finding the value in array - should say true', find(50, [10, 50, 66]));
console.log('finding the value in array - should say false', find(99, [10, 50, 66]));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string){
if(letter === 'a'){
  return true;
}
if(string === 'z'){
  return false;
}

}


console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
