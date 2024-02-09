// task1 
// 1. შექმენით ფუნქცია, რომელიც იპოვის ყველზე გრძელ სიტყვას მოცემულ სტრიქონში.
let sentence = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae excepturi id reprehenderit nesciunt soluta, laudantium quos molestiae facilis voluptate dolore saepe cumque consequatur corporis provident suscipit ipsa odio in totam."

function longestWord(sentence) {
    const words = sentence.split(" ");
    
    let longest = '';
    let maxLength = 0;
    
    for (let i = 0; i < words.length; i++) {
        const word = words[i]

        if (word.length > maxLength) {
            longest = word;
            maxLength = word.length;
        }
    }
    return longest;
}
console.log("Longest word:", longestWord(sentence));


// task 2
// 2. შექმენით ობიექტი სახელით "calculator" შესაბამისი ატრიბუტებით სახელად. num1, num2, ანუ რაღაც ესეთი {num1: 10, num2: 5}, დაამატეთ ამ ობიექტში ახალი ატრიბუტები სახელით add, substract, multiply, divide, მათი მთავარი მიზანი უნდა იქნეს, რომ გამოიანგარიშოს ამ ორი რიცხვის ჯამი, სხვაობა, ნამრავლი, განაყოფი. ეს ყველაფერი მოახდინეთ this საკვანძო სიტყვის მეშვეობით.
const calculator = {
    num1: 0,
    num2: 0,
    setNumbers: function(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    },
    add: function() {
        return this.num1 + this.num2;
    },
    subtract: function() {
        return this.num1 - this.num2;
    },
    multiply: function() {
        return this.num1 * this.num2;
    },
    divide: function() {
        if (this.num2 !== 0) {
            return this.num1 / this.num2;
        } else {
            return "Cannot divide by zero!";
        }
    }
};

calculator.setNumbers(10, 5);
console.log("Addition:", calculator.add()); 
console.log("Subtraction:", calculator.subtract()); 
console.log("Multiplication:", calculator.multiply()); 
console.log("Division:", calculator.divide()); 


// taks 3
// 3. შექმენით ფუნქცია, რომელიც შეიძლება გამოყენებულ იქნეს როგორც ფუნქციის ჰოისტინგის მაგალითად. შექმენით ეს ფუნქცია მისი გამოძახების შემდეგ და აღწერეთ კომენტარებით თუ როგორ მუშაობს იგი ჰოისტინგის მეშვეობით.
hello(); 

function hello() {
    console.log("Hello, world!");
}