// Creatting object using literal
const person={
    firstName:"Aamir",
    lastName:"Hussain",
    age:27,
};

//creating empty object then adding properties
const person1={};
person1.firstName="aamir";
person1.lastName="hussain";
person1.age=23;

/// Using new keyword
const person2=new Object();

const person3={
    firstName:"Aamir",
    lastName:"Hussain",
    age:27,
    fullName: function(){
            console.log(this.firstName +" "+this.lastName);
    }
};
person3.fullName();


const arr=[1,2,3,4,5,6];

console.log(arr[arr.length-1])


