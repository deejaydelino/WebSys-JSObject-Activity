// // var b = 20;
// // let c = 10;
// // const d = 30;

// // console.log(b);
// // console.log(c);
// // console.log(d);

// var variableName = "Variable Value"

// var a = 10;
// var b = "Hello variable";

// console.log(a);
// console.log(b);

// function example ()
// {
//     if (true) {
//         let a = 10;
//     }
//     console.log(a);
// }


// example();

// console.log(a);

// let a = 10;

// console.log(a);

// let name = "John"
// let name = "Doe"

// console.log(name);



// for (let i = 0; i < 10; i++) {
//     setTimeout(() => console.log(i), 1000);
// }



// Syntax
// let  variableName = "Variable Value";

// black scope {}

// {
//     let a = 10;
//     console.log(a);
// }

// console.log(a);


// function example () {
//     let a = 10;
//     console.log(a);
// }

// example();
// console.log(a);

// let num = 10;

// {

//     let num = 20 

//     console.log(num);
// }
// console.log(num);


// let num = 10;

// {

//     let num = 20 

//     console.log(num);
// }
// console.log(num);
// let num = 30;


// x = 10;
// console.log(x);

// let x;

// let num = 10;
// num = 20;
// num += 10;

// console.log(num);


// const a = 20;
// if (true) {
//     const a = 10;
//     console.log(a);
// }

// console.log(a);


// const x = 10;
// console.log(x);

// object.freeze(obj);

// const person = {name: 'John', age: 30};

        // object.freeze(obj);    
        // Object.seal(person); 
// Object.preventExtensions(person);

// person.age = 40;

// console.log(person.age); // 30

// person.city = "New york";
// console.log(person.city)

// delete person.name;
// console.log(person.name);


const user = {
    userId: 'user123', 
    personalInfo: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@example.com',
        
    },
    preferences: {
        theme: 'light',
        notificationsEnable: true
    },
    securitySettings: {
        lastLogin: '2024-07-04',
        isAccountActive: true
    }
};

// USER ID
Object.seal(user.userId);

userid = "user123";

console.log(user.userId); // user123

userid = "Paner";

console.log(user.userId); // Paner

// Personal Information

Object.preventExtensions(user.personalInfo.email);
console.log(user.personalInfo.email);
// adding new properties in to an email
user.personalInfo.email = "paner@example.com";
console.log(user.personalInfo.email);
// delete
delete user.personalInfo.email;
console.log(user.personalInfo.email);

//securitySettings

Object.preventExtensions(user); {
    user.securitySettings.lastLogin = '2024-08-04';
    console.log(user.securitySettings.lastLogin);
}
console.log(user.securitySettings);




