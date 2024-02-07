// task1
// ქვემოთ მოცემულ კოდში დაშვებულია ლოგიკური შეცდომა კოდის გაშვების შედეგად გამოდის ყველა ინფორმაცია  იპოვეთ შეცდომა და გაასწორეთ იგი
let action = "move";

switch (action) {
    case "move":
        alert("Your're moving!");
        break;
    case "jump":
        alert("You're jumping!");
        break;
    case "run":
        alert("You're running!");
        break;
    default:
        alert("invalid action.");
};

// task 2 
// switch-ის გამოყენებით შეავსეთ გამოტოვებული ადგილები ისე, რომ თუ ბოსტნეული (vegetables) სტაფილოზე (carrot) დგას გამოიტანოს “Hello” და თუ “Broccoli” ზე დგას გამოიტანოს “Welcome”.
switch(vegetables) {
    case "Carrot":
        alert("Hello")
        break;
    case "Broccoli":
        alert("Welcome")
        break;
};
//თუ ბოსტნეული(vegetables) არც ბროკოლია(broccoli) და არც სტაფილო (carrot) მაშინ გამოიტანეთ არცერთი (“Neither”)
switch(vegetables) {
    case "Broccoli":
        alert("Hello")
        break;
    case "Carrot":
        alert("Welcome")
        break;
    default:
        alert("Neither");
};

//task 3
//შექმენით ხმის მიცემის უფლების შემმოწმებელი ფუნქცია. თუ მომხმარებლის ასაკი ნაკლებია 18-ზე უნდა გამოჩნდეს, რომ მას არ შეუძლია ხმის მიცემა, თუ მისი ასაკი მეტია 18-ზე უნდა გამოჩნდეს, რომ მომხმარებელს შეუძლია ხმის მიცემა.
let Age = 18;
if (Age<18){
    alert("თქვენ არ შეგიძლიათ ხმის მიცემა")
}else {
    alert("თქვენ შეგიძლიათ ხმის მიცემა")
};

// task 4 
// შექმენით პაროლის სიძლიერის შემმოწმებელი ფუნქცია, ფუნქციამ უნდა მიიღოს პარამეტრის სახით შესამოწმებელი პაროლი, პირობა ასეთია:
// 1. თუ პაროლი შედგება 3-ზე ნაკლები სიმბოლოსგან იგი უარგისია.
// 2. თუ პაროლი შედგება მინ. 3 მაქ. 5 სიმბოლოსგან იგი სუსტია
// 3. თუ პაროლი შედგება მინ. 6 მაქ. 7 სიმბოლოსგან იგი მისაღებია
// 4. თუ პაროლი შედგება მინ. 8 მაქ. 16 სიმბოლოსგან იგი ძლიერია.
// 5. თუ პაროლი მხოლოდ რიცხვებისგან შედგება იგი უვარგისია.

function checkPasswordStrength(password) {
    if (password.length < 3) {
        return "Rejected";
    }
    if (password.length >= 3 && password.length <= 5) {
        return "Weak";
    }
    if (password.length >= 6 && password.length <= 7) {
        return "Acceptable";
    }
    if (password.length >= 8 && password.length <= 16) {
        return "Powerful";
    }
    // if (პაროლი შედგება მხოლოდ რიცხვებისგან) {
    //     return "Invalid";
    // }
    return "Unknown Strength";
}

// task 5
// //შენიშვნა: დავალების შესასრულებლად დაგჭირდებათ ჩაშენებული პირობითი ოპერატორების გამოყენება. შექმენით Quiz-ის პროგრამა შემდეგი პირობების გათვალისწინებით:
// საჭიროა გქონდეთ მინიმუმ 5 სხვადასხვა შეკითხვა.
// ჩაშენებული პირობითი ოპერატორების მეშვეობით გააკეთეთ ისე, რომ მომხმარებელს შეეძლოს თითოეული ამ შეკითხვიდან მომდევნო შეკითხვაზე გადასვლა, მხოლოდ იმ შემთხვევაში თუ წინა შეკითხვას სწორად უპასუხებს.
// მაგ. თუ მომხმარებელი გასცემს სწორად პასუხს პირველ შეკითხვას, მხოლოდ ამ შემთხვევაში უნდა მოხდეს მისი მეორე შეკითხვაზე გადაყვანა იგივე დანარჩენ შეკითხვებზეც.
// ???????????? //
function startQuiz() {
    let questions = [
        "What is the capital of Georgia?",
        "10 / 10 = ?",
        "What is the chemical symbol for water?",
        "How many continents are there?",
        "what year is it?"
    ];

    let correctAnswers = ["Tbilisi", "1", "H2O", "7", "2024"];
    let score = 0;

    for (let i = 0; i < questions.length; i++) {
        let userAnswer = prompt(questions[i]);
        if (userAnswer === correctAnswers[i]) {
            score++;
            alert("Correct!");
        } else {
            alert("Incorrect. The correct answer is: " + correctAnswers[i]);
        }
    }

    alert("You scored " + score + " out of " + questions.length);
}

startQuiz();
=======
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
