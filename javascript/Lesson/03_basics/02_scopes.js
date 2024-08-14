// block scope

// Global Scope {}

let a = 20
const b = 10
var c = 30

console.log(a)
console.log(a)
console.log(c)


//*************************************************************************************

// Block Level Scope Example with {}
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


console.log(students.roll1)
students.roll1.email = "sujit@yahoo.com"
console.log(students.roll1)


//*************************************************************************************

function myfun1() {
    const userName = "iamsujit"
    function myFun01() {
        website = "youtube"
        console.log (userName)
    }
    // console.log(website)
    myFun01()
}

myfun1()

//*************************************************************************************

if (true) {
    const userName = "myselfsujittomar"
    if (userName === "myselfsujittomar"){
        const website = "sujittomar.com"
        console.log(`my username is ${userName} & websie is ${website}`)
    }
    // console.log(website)
}
// console.log(userName)

