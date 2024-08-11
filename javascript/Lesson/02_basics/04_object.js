//1. singleton

//*************************************************************************************

const tinderUser01 = new Object();
const tinderUser02 = {};
console.log(tinderUser01) // {}
console.log(tinderUser02) // {}

//*************************************************************************************

const studentuser01 = {}
studentuser01.id = 13545455
studentuser01.email = "sujittomar@google.com"
studentuser01.isPass = true

console.log(studentuser01)


//*************************************************************************************

console.log("****************************** From Here *********************************")


const studentuser02 = {
    email : "sujittomar@google.com",
    fullname : {
        userfullname : {
            firstName : "Sujit",
            lastName : "Tomar",
        },
    },
}

console.log(studentuser02)
console.log(studentuser02.fullname)
console.log(studentuser02.fullname.userfullname)
console.log(studentuser02.fullname.userfullname.firstName)
console.log(studentuser02.fullname.userfullname.lastName)

