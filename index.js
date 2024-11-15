// PRINTING

console.log("Hello world")

// DECLARING VARIABLES

let firstName = "Chett"
const lastName = "Tiller"
var fullName = `${firstName} ${lastName}`


// PRIMITIVE DATA TYPES

const someString = "I am a string"
const someInteger = 12
const someFloat = 12.1
const someBoolean = true


// OTHER DATA TYPES

const someArray = [1,2,3,4,5]
const someObject = { name: "Chett", age: "unknown" }
const someTuple = 'what the heck is a tuple?'
const someSet = Set( [1,2,3,3,3,3,3,3,3,4,5] )


// CONDITIONAL STATEMENTS

const someValue = "I am truthy"
let truthy

if (someValue) {
    truthy = true
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