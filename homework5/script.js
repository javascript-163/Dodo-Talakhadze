// // task1 
// //შექმენით პროგრამა, რომელიც ნებისმიერი 10 ელემენტისგან შემდგარი მასივიდან გამოიტანს ყოველ მესამე ელემენტს ეკრანზე. შეასრულეთ ეს დავალება ციკლების მეშვეობით.
// let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // ციკლის გაშვება ყოველი მესამე ელემენტისთვის
// for (let i = 2; i < myArray.length; i += 3) {
//     console.log(myArray[i]);
// }

// // task 2 
// //შექმენით, პროგრამა, რომელიც 10-დან 1-მდე რიცხვებს გამოიტანს. მაგ. 10,9,8,7,6,5,4,3,2,1, შეასრულეთ ეს დავალება ციკლების მეშვეობით. 
// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }

// task 3
// let names = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob'];
// let filteredNames = [];

// for (let i = 0; i < names.length; i++) {
//     if (names[i] !== 'Bob') {
//         filteredNames.push(names[i]);
//     }
// }

// console.log(filteredNames);

// task 4 
// //ციკლური ოპერაციების მეშვეობით შექმენით ფუნქცია, რომელიც დაიანგარიშებს კონკრეტული რიცხვის ხარისხს, მაგ. შექმენით ფუნქცია სახელით: fun და პარამეტრებით: number, power, მაგ. თუ რიცხვია 5 და ხარისხი 3, მაშინ თქვენმა ფუნქციამ უნდა დააბრუნოს 5*5*5 ანუ 125.
// function fun(number, power) {
//     let result = 1;
//     for (let i = 0; i < power; i++) {
//         result *= number;
//     }
//     return result;
// }
// console.log(fun(5, 3));

// task 5 
//შექმენით ფუნქცია, რომელიც 1-დან 100-მდე რიცხვებში დაიანგარიშებს თუ რომელი რიცხვები იყოფა 3-ზე უნაშთოდ, და იმ რიცხვების ადგილას რომლებიც იყოფა 3-ზე უნაშთოდ გამოიტანს, Fizz, ასევე იგივე ფუნქციის მიხედვით გამოიანგარიშეთ თუ რიცხვი 5-ზე იყოფა უნაშთოდ და გამოიტანეთ Buzz, ხოლო თუ რიცხვი იყოფა 3-ზეც და 5-ზეც უნაშთოდ გამოიტანეთ FizzBuzz.
// function fizzBuzz() {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log(i + ' FizzBuzz');
//         } else if (i % 3 === 0) {
//             console.log(i + ' Fizz');
//         } else if (i % 5 === 0) {
//             console.log(i + ' Buzz');
//         } else {
//             console.log(i);
//         }
//     }
// }
// fizzBuzz();

// task 6
//შექმენით ფუნქცია,მაგ. სახელით: factorialCalculator(number), რომელიც დაიანგარიშებს და ეკრანზე გამოიტანს მისთვის პარამეტრის სახით მიწოდებული რიცხვის ფაქტორიალს, მაგ. 5! => 2*3*4*5 = 120, 
// function factorialCalculator(number) {
//     if (number === 0 || number === 1) {
//         return 1;
//     } else {
//         let result = 1;
//         for (let i = 2; i <= number; i++) {
//             result *= i;
//         }
//         return result;
//     }
// }
// console.log(factorialCalculator(5));

// task 7
//შექმენით ფუნქცია, რომელიც სტრიქონის პირველ ასობგერის კაპიტალიზირებას მოახდენს მაგ. javascript => უნდა გახდეს: Javascript, ანუ J დიდი ასობგერით უნდა ეწეროს.
// function capitalizeFirstLetter(str) {
//     if (typeof str !== 'string' || str.length === 0) {
//         return '';
//     }
    
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }
// console.log(capitalizeFirstLetter('javascript')); 

// task 8 
// შექმენით ფუნქცია, რომელიც შეამოწმებს არის თუ არა მასზე მიწოდებული სტრიქონი ცარიელი. მაგ. blankStringChecker(testString) => რომელიც დააბრუნებს this string is blank-ს თუ ცარიელია/ this string is not blank-ს თუ ცარიელი არაა.
// function blankStringChecker(testString) {
//     if (typeof testString !== 'string') {
//         return 'This is not a string.';
//     }
    
//     if (testString.trim() === '') {
//         return 'This string is blank.';
//     } else {
//         return 'This string is not blank.';
//     }
// }
// console.log(blankStringChecker('')); 
// console.log(blankStringChecker('Hello')); 
// console.log(blankStringChecker(123)); 

// task 9
//შექმენით ფუნქცია, რომელიც მასზე მიწოდებულ სტრიქონს გადააქცევს მასივად. მაგ. stringToArray(testString) => თუ მივაწვდით სტრიქონს “Hello, World” => გამოიტანს მის ვერსიას მასივში. [“Hello”, “World”]
// function stringToArray(testString) {
//     if (typeof testString !== 'string') {
//         return 'Input is not a string.';
//     }
    
//     return testString.split(' ');
// }
// console.log(stringToArray('Hello, World')); 
// console.log(stringToArray(123)); 

// task 10 
// შექმენით ერთგვარი ემაილის დამცველი ფუნქცია, რომლის ფუნქციონალი მდგომარეობს შემდგომში: მომხმარებელი გაწვდის ემაილს წერტილით გამოყოფილ თავისი სახელით და გვარით, beqa.beqauri@gmail.com, თქვენი ფუნქცია კი გამოიტანს მის დაცულ ვერსიას ამ ფორმით:  beqa……..@gmail.com. წერტილების ოდენობა უნდა ემთხვეოდეს გვარის სიგრძეს.
// function hideEmail(email) {
//     const parts = email.split('@');
//     const username = parts[0];
//     const domain = parts[1];
    
//     const dots = '.'.repeat(username.length);
    
//     return `${username.substring(0, 4)}${dots}@${domain}`;
// }
// console.log(hideEmail('beqa.beqauri@gmail.com'));