//Problem 1
console.log("Question # 01");
  // Test the function
  const number = 231617;
const k = 4;
// Convert the number to a string
const numberStr = number.toString();

// Find the kth character from the end
const char = numberStr.charAt(numberStr.length - k);

console.log(char);
console.log("Question # 02");
let num = 23617;
let sum = 0;
while (num) {
  sum += num % 10;
  num = Math.floor(num / 10);
}

console.log(`Sum of digits in 23617 is ${sum}`);
console.log("Question # 03");
let num1 = 23617;
let sum1 = 0;

while (num1 > 0) {
    const digit = num1 % 10;
    if (digit % 2 === 0) {
        sum1 += digit;
    }
    num1 = Math.floor(num1 / 10);
}
console.log(`Sum of even digits in 23617 is ${sum1}`);
console.log("Question # 04");
for (let i = 0; i <= 10; i++) {
    const square = i * i;
    const cube = i * i * i;
    console.log(`Number: ${i}, Square: ${square}, Cube: ${cube}`);
  }
  console.log("Question # 05");
function FLMVPosition(inputString) {
    const vowels = "aeiouAEIOU"; 
    for (let i = 0; i < inputString.length; i++) {
      if (vowels.includes(inputString[i])) {
        return i + 1; 
      }
    }
    return -1; 
  }
  function reverseNumberDigits(inputNumber) {
    const reversedString = String(inputNumber).split("").reverse().join("");
    return parseInt(reversedString, 10);
  }
  const inputString = "Hello, World!";
  const inputNumber = 12345;
  
  const vowelPosition = FLMVPosition(inputString);
  console.log(`The left-most vowel in "${inputString}" is at position ${vowelPosition}`);
  
  const reversedNumber = reverseNumberDigits(inputNumber);
  console.log(`The reverse of ${inputNumber} is ${reversedNumber}`);
  console.log("Question # 06");
  // Generate a random integer between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

// Prompt the user for a guess
const userGuess = parseInt(prompt("Guess a number between 1 and 10:"), 10);

// Check if the user's guess matches the random number
if (userGuess === randomNumber) {
  console.log("You WIN!");
} else {
  console.log("Not matched. The correct number was " + randomNumber);
}
console.log("Question # 07");
function check10FirstOrLast(arr) {
    // Check if the array has at least two elements
    if (arr.length < 2) {
      return "Array length must be greater or equal to 2.";
    }
  
    // Check if 10 is at the first or last position
    if (arr[0] === 10 || arr[arr.length - 1] === 10) {
      return "10 appears in the first or last position.";
    } else {
      return "10 does not appear in the first or last position.";
    }
  }
  
  // Example usage:
  const array1 = [10, 2, 3, 4];
  const array2 = [1, 2, 3, 4];
  
  console.log(check10FirstOrLast(array1)); 
  console.log(check10FirstOrLast(array2)); 
console.log("Question # 08");
function sortStringAlphabetically(inputString) {
    // Convert the string to an array of characters
    const charArray = inputString.split('');
  
    // Sort the array alphabetically
    const sortedArray = charArray.sort();
  
    // Join the sorted array back into a string
    const sortedString = sortedArray.join('');
  
    return sortedString;
  }
  const inputString1 = 'comsats';
  const sortedResult = sortStringAlphabetically(inputString1);
  console.log(sortedResult); 
  


  
  



  