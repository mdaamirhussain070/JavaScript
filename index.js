// console.log('Hellow world')

//primitive variable 
let name ="String"; // decleared variable
console.log(name);
const interestRate=8.5;  // decleared constant

console.log(interestRate);

let userName="aamir" ;  // String literal
let age =25; // Number Literal
let isApproved=true; // Boolean literal

let firstName= undefined; // By default undefined

let selector=null; // 

// Dynamic variable type

console.log(typeof name);
name=12;
console.log(typeof name);
// variable type decide at run time;

// what an Object

// Reference type variable
let person={    // person is a object of reference type
    firstName:"Aamir", // properties of object person
    personAge: 30 // properties of object person
};
console.log(person);
// Dot notation
person.firstName="Jon";
console.log(person);

// Bracket notation
person['firstName']="Marry";
console.log(person);

let selectColor=["red","blue","green"];
selectColor[3]="white";
console.log(selectColor.length);

let date=new Date();
console.log(date)
date.
setTimeout()
// function
function greet(){
    console.log("Hello world");
    return " my name khan"
}
console.log(greet())

function max(a,b){
    if(a>b)return a;
    return b;
}

console.log(max(1,2));



