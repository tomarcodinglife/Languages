let TextName = "Sujit Kumar Singh"
console.log(TextName)
const heading = document.querySelectorAll("h1")

const paragraph = document.getElementsByClassName("para-class")

const myParagraphArray = Array.from(paragraph)

myParagraphArray.forEach((p) => {
    p.style.color = "red"
    p.style.backgroundColor = "black"
    p.style.borderRadius = "5px"
    p.style.padding = "5px"
})