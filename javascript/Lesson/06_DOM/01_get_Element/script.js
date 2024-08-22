console.log("hi i am Javascript")


// get Element by Id

let title = "Sujit Kumar Singh"

let headingName = document.getElementById("Heading-Name")
headingName.innerText = title
console.log(headingName) 

let className = document.getElementById("Heading-Name").getAttribute('class')
// let className=document.getElementById('Heading-Name').getAttribute('class') 
console.log(className)

let newClass = document.getElementById('Heading-Name').setAttribute('class', 'Heading-Name test-classadd')

headingName.style.backgroundColor = 'green'
headingName.style.borderRadius = '15px'
headingName.style.color = 'white'
headingName.style.color = 'blue'

