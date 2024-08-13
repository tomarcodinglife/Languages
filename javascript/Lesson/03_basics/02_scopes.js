// block scope

let a = 20
const b = 10
var c = 30

console.log(a)
console.log(a)
console.log(c)

let students = {
    numberOfStudent : 11,
    roll1 : {
        name : "Sujit Kumar Singh",
        roll : 1,
        isPass : true,
        totalMarks : 449,
        email : "sujittomar@google.com"
    },
    roll2 : {
        name : "Rohit",
        roll : 1,
        isPass : true,
        totalMarks : 398,
        email : "sujittomar@google.com"
    },
    roll3 : {
        name : "Shubham",
        roll : 1,
        isPass : true,
        totalMarks : 465,
        email : "sujittomar@google.com"
    },
    roll4 : {
        name : "Rohan",
        roll : 4,
        isPass : true,
        totalMarks : 256,
        email : "sujittomar@google.com"
    },
    roll5 : {
        name : "Amit Kumar",
        roll : 5,
        isPass : false,
        totalMarks : 156,
        email : "sujittomar@google.com"
    },
};

// Object.freeze(students)
console.log(students.roll1)
students.roll1.email 