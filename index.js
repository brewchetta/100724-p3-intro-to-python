// PRINTING

console.log("Hello world")

// DECLARING VARIABLES

let firstName = "Chett" // can change
const lastName = "Tiller" // cannot change - CONSTANT
var fullName = `${firstName} ${lastName}` // DONT USE THIS

firstName = "Bob"


// PRIMITIVE DATA TYPES

const someString = "I am a string"
const someInteger = 12
const someFloat = 12.1
const someBoolean = true

console.log(typeof someString)


// OTHER DATA TYPES

const someArray = [1,2,3,4,5]
const somePlainOldJavascriptObject = { 
    name: "Chett", 
    age: "unknown", 
    "1": "I am one", 
    1: "I am 1" }
const someTuple = 'what the heck is a tuple?'
const someSet = new Set( [1,2,3,3,3,3,3,3,3,4,5] )

someArray.push(6)
somePlainOldJavascriptObject.name


// CONDITIONAL STATEMENTS

const someValue = "I am truthy"
let truthy

if (!someValue) {
    truthy = true
} else if (someValue) {
    console.log("We are at the else if")
} else {
    truthy = false
}


const someTernary = truthy ? true : false


// LOOPS

for (let i = 0; i < someArray.length; i++) {
    console.log( someArray[i] )
}


for (num of [1,2,3,4,5]) {
    console.log(num)
}


let i = 0
const cats = ["Octavia", "Ursula"]

while (i < cats.length) {
    console.log( `${cats[i]} is a pretty kitty` )
    i++
}


const nums = [1,2,3,4,5,6,7,8,9,10]

const squaredNums = nums.map(n => n**2)


// DECLARING FUNCTIONS


function goodOlFunction(someParameter) {
    return `This is what you put in: ${someParameter}`
}

goodOlFunction("I am an argument")



const arrowFunction = (x, y) => x + y

arrowFunction(5, 10)