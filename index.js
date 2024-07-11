// PRINTING

console.log("Hello world")

// DECLARING VARIABLES

let firstName = "Chett"
const lastName = "Tiller"
var fullName = `${firstName} ${lastName}`


// PRIMITIVE DATA TYPES

const someString = "I am a string"
const someNumber = 12
const someBoolean = true


// OTHER DATA TYPES

const someArray = [1,2,3,4,5]
const someObject = { name: "Chett", age: "unknown" }
const someTuple = 'what the heck is a tuple?'
const someSet = Set( [1,2,3,3,3,3,3,3,3,4,5] )


// LOOPS

for (let i = 0; i < someArray.length; i++) {
    console.log( someArray[i] )
}


// DECLARING FUNCTIONS

function someFunction(arg) {
    return `This is the argument you put in: ${arg}`
}

const additionArrowFunc = (x, y) => x + y