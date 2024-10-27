// function niraj() {
//   const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue",
//     return person;
//   };
// }
// niraj();
// console.log(person.age);


// function niraj(d){
//   let  a=85;
//  let   b=65;
//     c=a+b;
//     return c;
// }

// console.log(niraj());


// array function
// let sum =(a,b) => a+b;

// console.log(sum(5,6));


function person(name,age){
    // let person = Object.create(person.prototype)
    this.name = name;
    this.age = age;
}

person.prototype.greet= function(){
    console.log(`hello ${this.name}`)
}

let user = new person("niraj",24)
user.greet()
console.log(user)

