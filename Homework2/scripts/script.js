// task 1
let flowers = ["Lotus", "Sunflower", "Violet", "Lily"];
if (Array.isArray(flowers)) 
{console.log("Is an array");} 
else {console.log("Is not an array")};

// task 2
console.log(flowers[0]);

// task 3
console.log(flowers[flowers.length - 1]);


// task 4
color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th","st","nd","rd"]
console.log("1" + o[1] + " choice is " + color[0])
console.log("2" + o[2] + " choice is " + color[1])
console.log("3" + o[3] + " choice is " + color[2])

// task5
let student = {
name: 'Matthew',
surname: 'Perry',
age: 54,
country: "America"
};
student.TVshow = "friends";
console.log(student);
delete student.age;
console.log(student);
student.country = "CAnada";
console.log(student);
