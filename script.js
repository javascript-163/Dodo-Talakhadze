// // task 1 
// // ქვემოთ მოცემულ კოდში დაშვებულია ლოგიკური შეცდომა კოდის გაშვების შედეგად გამოდის ყველა ინფორმაცია  იპოვეთ შეცდომა და გაასწორეთ იგი
// let action = "move";

// switch (action) {
//     case "move":
//         alert("Your're moving!");
//         break;
//     case "jump":
//         alert("You're jumping!");
//         break;
//     case "run":
//         alert("You're running!");
//         break;
//     default:
//         alert("invalid action.");
// };

// // task 2 
// // switch-ის გამოყენებით შეავსეთ გამოტოვებული ადგილები ისე, რომ თუ ბოსტნეული (vegetables) სტაფილოზე (carrot) დგას გამოიტანოს “Hello” და თუ “Broccoli” ზე დგას გამოიტანოს “Welcome”.
// switch(vegetables) {
//     case "Carrot":
//         alert("Hello")
//         break;
//     case "Broccoli":
//         alert("Welcome")
//         break;
// };
// //თუ ბოსტნეული(vegetables) არც ბროკოლია(broccoli) და არც სტაფილო (carrot) მაშინ გამოიტანეთ არცერთი (“Neither”)
// switch(vegetables) {
//     case "Broccoli":
//         alert("Hello")
//         break;
//     case "Carrot":
//         alert("Welcome")
//         break;
//     default:
//         alert("Neither");
// };

// //task 3
// //შექმენით ხმის მიცემის უფლების შემმოწმებელი ფუნქცია. თუ მომხმარებლის ასაკი ნაკლებია 18-ზე უნდა გამოჩნდეს, რომ მას არ შეუძლია ხმის მიცემა, თუ მისი ასაკი მეტია 18-ზე უნდა გამოჩნდეს, რომ მომხმარებელს შეუძლია ხმის მიცემა.
// let Age = 18;
// if (Age<18){
//     alert("თქვენ არ შეგიძლიათ ხმის მიცემა")
// }else {
//     alert("თქვენ შეგიძლიათ ხმის მიცემა")
// };

// task 4 
//შექმენით პაროლის სიძლიერის შემმოწმებელი ფუნქცია, ფუნქციამ უნდა მიიღოს პარამეტრის სახით შესამოწმებელი პაროლი, პირობა ასეთია:
// 1. თუ პაროლი შედგება 3-ზე ნაკლები სიმბოლოსგან იგი უარგისია.
// 2. თუ პაროლი შედგება მინ. 3 მაქ. 5 სიმბოლოსგან იგი სუსტია
// 3. თუ პაროლი შედგება მინ. 6 მაქ. 7 სიმბოლოსგან იგი მისაღებია
// 4. თუ პაროლი შედგება მინ. 8 მაქ. 16 სიმბოლოსგან იგი ძლიერია.
// 5. თუ პაროლი მხოლოდ რიცხვებისგან შედგება იგი უვარგისია.
let password = "5555555";

if (password.length<3 || Number(typeof(password))=="number"){
    console.log("your password is not valid!")
} else if (password.length>2 && password.length<6){
    console.log("your password is too weak")
} else if (password.length>5 && password.length<8){
    console.log("your password is acceptable")
} else {
    console.log("your password is strong")
}