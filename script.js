// task 1 
function square(number){
    return number * number;
}
let number = 5;
let result = square(number);
console.log('the square of', number, 'is', result);


// task 2
function CelToFar(celsius){
    return (celsius * 9/5) + 32;
}
let celsiusTemp = 25;
let farTemp = CelToFar(celsiusTemp);
console.log(celsiusTemp + ' celsius is ' + farTemp + ' farenheit');

// task 3 
function numberRange(number, firstNUm, lastNum){
    return (number >= firstNUm && number <= lastNum)
};
let userNumber = 50;
let firstNUm = 10;
let lastNum = 80;

if (numberRange(userNumber, firstNUm, lastNum)){
    console.log('your number is in the range');
} else {
   console.log('your number is out of the range')
};

// task 4
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true; // Leap year
    } else {
      return false; // Not a leap year
    }
  }
  
  let userInput = prompt("Enter a year:");
  let year = parseInt(userInput);
  
  if (!isNaN(year)) {
    if (isLeapYear(year)) {
      alert(year + " is a leap year.");
    } else {
      alert(year + " is not a leap year.");
    }
  } else {
    alert("Invalid input. Please enter a valid year.");
  }

//   task5
function calculator() {
    let number1 = parseFloat(prompt("Enter number 1:"));
    let number2 = parseFloat(prompt("Enter number 2:"));
    let action = prompt("Enter the action (+ for addition, - for subtraction, * for multiplication, / for division):");
  
    let result;
    switch (action) {
      case "+":
        result = number1 + number2;
        break;
      case "-":
        result = number1 - number2;
        break;
      case "*":
        result = number1 * number2;
        break;
      case "/":
        if (number2 !== 0) {
          result = number1 / number2;
        } else {
          console.log("Error: Division by zero!");
          return;
        }
        break;
      default:
        console.log("Invalid action!");
        return;
    }
    console.log("Result:", result);
  }
  calculator();