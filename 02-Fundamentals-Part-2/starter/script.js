'use strict';

/*
let hasDriversLicense = false;
const passedTest = true;

if (passedTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive :D`);

// const interface = `Audio`;
// const private = 123;
// const if = `hello`;

*/

/*
function logger() {
    console.log(`My name is Lee :)`);
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apple(s) and ${oranges} orange(s). `;
    return juice;
}

const appleJuice = fruitProcessor(2,0);
console.log(appleJuice);
console.log(fruitProcessor(3,4));

const num = Number(`23`);

*/

/*
// Function Declaration
function calcAge1(birthYear){
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);

// Function Expression.
const calcAge2 = function(birthYear){
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);
*/

/*
// Arrow Function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1982, `Lee`));
console.log(yearsUntilRetirement(1991, `Jonas`));

*/

/*
function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of \n apple and ${orangePieces} pieces of orange. `;
    return juice;
}

console.log(fruitProcessor(2, 3));

*/

/*
const calcAge = function (birthYear){
    return 2037 - birthYear;
}

const calcRetirement = function (age){
    return 65 - age;
}

const yearsUntilRetirement = function (birthYear, firstName){
    const age = calcAge(birthYear);
    const retirement = calcRetirement(age);

    if(retirement > 0){
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    }else{
        console.log(`${firstName} has already retired 🎉`);
        return -1;
    }

    // return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1982, `Lee`));
console.log(yearsUntilRetirement(1991, `Jonas`));
console.log(yearsUntilRetirement(1950, `Mike`));

*/

/*
const friend1 = `Michael`;
const friend2 = `Steven`;
const friend3 = `Peter`;

const friends = [`Michael`, `Steven`, `Peter`];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(y);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2] = `Jay`;
console.log(friends);
// friends = [`Bob`, `Alice`];

const firstName = `Jonas`;
const jonas = [firstName, `Schmedtmann`, 2037 - 1991, `teacher`, friends];
console.log(jonas);
console.log(jonas.length);


// Exercise
const calcAge = function (birthYear){
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length-1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length-1])];
console.log(ages);
*/

/*
// Add elements
const friends = [`Michael`, `Steven`, `Peter`];
const newLength = friends.push(`Jay`);
console.log(friends);
console.log(`friends length = ${newLength}`);

const newerLength = friends.unshift(`John`);
console.log(friends);
console.log(`friends length = ${newerLength}`);

// Remove elements
const lastElement = friends.pop();  // Last Element
console.log(friends);
console.log(`last element = ${lastElement}`);


const firstElement = friends.shift(); // First Element
console.log(friends);
console.log(`first element = ${firstElement}`);

console.log(`Index of Michael: ${friends.indexOf(`Michael`)}`);
console.log(`Index of Steven: ${friends.indexOf(`Steven`)}`);
console.log(`Index of Peter: ${friends.indexOf(`Peter`)}`);
console.log(`Index of JohnJoe: ${friends.indexOf(`JohnJoe`)}`);

friends.push(23)
console.log(`Includes Steven: ${friends.includes(`Steven`)}`);
console.log(`Includes JohnJoe: ${friends.includes(`JohnJoe`)}`);
console.log(`Includes Number 23: ${friends.includes(23)}`);
console.log(`Includes String 23: ${friends.includes(`23`)}`);

if(friends.includes(`Peter`)){
    console.log(`You have a friend called Peter`);
}

*/

/*
const jonasArray = [
    `Jonas`,
    `Schmedtmann`,
    2037 - 1991,
    `teacher`,
    [`Michael`, `Peter`, `Steven`]
];

console.log(jonasArray);

const jonas = {
    firstName: `Jonas`,
    surname: `Schmedtmann`,
    age: 2037 - 1991,
    occupation: `teacher`,
    friends: [`Michael`, `Peter`, `Steven`]
};

console.log(jonas);
*/

/*
// Dot vs bracket notation

const jonas = {
    firstName: `Jonas`,
    lastName: `Schmedtmann`,
    age: 2037 - 1991,
    occupation: `teacher`,
    friends: [`Michael`, `Peter`, `Steven`]
};

console.log(jonas);
console.log(jonas.lastName);
console.log(jonas[`lastName`]);

const nameKey = `Name`;
console.log(jonas[`first` + nameKey]);
console.log(jonas[`last` + nameKey]);

console.log(jonas[`first${nameKey}`]);
console.log(jonas[`last${nameKey}`]);

// console.log(jonas.`last` + nameKey); // both cause
// console.log(jonas.`last${nameKey}`); // errors

const interestedIn = prompt(`What do you want to know about Jonas? Choose between firstName, lastName, age, occupation, friends?`);

if(jonas[interestedIn]){
    console.log(jonas[interestedIn]);
} else {
    console.log(`No such property as: '${interestedIn}'`);
}

jonas.location = `Portugal`;
jonas[`twitter`] = `@jonasschmedtman`;

console.log(jonas);

// Challenge
Jonas has 3 friends and his best friend is called Michael

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
*/

/*
const jonas = {
    firstName: `Jonas`,
    lastName: `Schmedtmann`,
    birthYear: 1991,
    occupation: `teacher`,
    friends: [`Michael`, `Peter`, `Steven`],
    hasDriversLicense: true,
    // calcAge: function(birthYear){
    //     return 2037 - birthYear;
    // }
    // calcAge: function(){
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    // }
    calcAge: function(){
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()}-yearold` 
        + `${this.occupation}, and he has `
        + `${this.hasDriversLicense? 'a' : 'no'} drivers license 🚗`;
    }
};

// console.log(jonas.calcAge(1991));
// console.log(jonas[`calcAge`](1991));
console.log(jonas.calcAge());
console.log(jonas[`calcAge`]());
console.log(jonas.calcAge);
console.log(jonas[`calcAge`]);

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// Challenge
// Write a method called getSummary that returns the following:
// "Jonas is a 46-yearold teacher, and he has a/no drivers license."
console.log(jonas.getSummary());

*/

/*
// console.log(`Lifting weights repetition 1 🏋️‍♀️`);
// console.log(`Lifting weights repetition 2 🏋️‍♀️`);
// console.log(`Lifting weights repetition 3 🏋️‍♀️`);
// console.log(`Lifting weights repetition 4 🏋️‍♀️`);
// console.log(`Lifting weights repetition 5 🏋️‍♀️`);
// console.log(`Lifting weights repetition 6 🏋️‍♀️`);
// console.log(`Lifting weights repetition 7 🏋️‍♀️`);
// console.log(`Lifting weights repetition 8 🏋️‍♀️`);
// console.log(`Lifting weights repetition 9 🏋️‍♀️`);
// console.log(`Lifting weights repetition 10 🏋️‍♀️`);


// for loop keeps running while condition is TRUE
for(let rep =1; rep <= 30; rep++){
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}
*/

/*
const jonasArray = [
    `Jonas`,
    `Schmedtmann`,
    2037 - 1991,
    `teacher`,
    [`Michael`, `Peter`, `Steven`],
    true
];
const types = [];

for (let i = 0; i < jonasArray.length; i++) {
    // Reading from jonas array
    console.log(jonasArray[i], typeof jonasArray[i]);

    // Filling of types array
    //types[i] = typeof jonasArray[i];
    types.push(typeof jonasArray[i]);
}

console.log(types);

const years = [1956, 1982, 1984, 2018, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2032 - years[i]);
}
console.log(ages);

// continue and break
console.log(`--- ONLY STRINGS ---`);
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string') continue;
    console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log(`--- BREAK WITH NUMBER ---`);
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === 'number') break;
    console.log(jonasArray[i], typeof jonasArray[i]);
}

*/

/*
const jonasArray = [
    `Jonas`,
    `Schmedtmann`,
    2037 - 1991,
    `teacher`,
    [`Michael`, `Peter`, `Steven`],
    true
];

// 0, 1, ..., 4
// 4, 3, ..., 0
for (let i = jonasArray.length - 1; i >= 0; i--){
    console.log(i, jonasArray[i]);
}

for (let exercise = 1; exercise <= 3; exercise++){
    console.log(`----- Starting Exercise ${exercise} -----`);
    for (let repetition = 1; repetition <= 5; repetition++){
        console.log(`--- Exercise ${exercise}: Repetition ${repetition} 🏋️‍♀️ ---`);
    }
}
*/

for(let rep =1; rep <= 10; rep++){
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

let rep=1;
while (rep <= 10) {
    console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
    rep++;
}

let dice = Math.trunc((Math.random()*6))+1;
while (dice !== 6) {
    console.log(`You rolled a : ${dice}`);
    dice = Math.trunc((Math.random()*6))+1;
    if (dice === 6) console.log(`Loop is about to end...`);
}
console.log(`You rolled a: ${dice}`);