// Question:
/*
Ask a small girl - "How old are you?". She always says strange things... Lets help her!

For correct answer program should return int from 0 to 9.

Assume test input string always valid and may look like "1 year old" or "5 years old", etc.. The first char is number only.
*/

// function getAge(inputString){
// // return correct age (int). Happy coding :) 
  
//   return parseInt(inputString[0])
// }

const getAge = inputString => parseInt(inputString[0]);

// For this one I liked using the arrow fuctnion and I think its clean
// Apparently just using parseInt with inputString works without calling the first index
// This is because parseInt only checks the first character of the string and will return that character as a number

console.log(getAge("4 years old"))
// 4
console.log(getAge("5 years old"))
// 5

/* 
Question:

Description:
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]
*/

function maps(x){
    return x.map(a => a * 2);
}

console.log(maps([1, 2, 3]))
// 2, 4, 6
console.log(maps([21, 2, 123]))
// 42, 4, 246


/* 
Will you make it?
You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog, NASM and COBOL) if it is possible and false (0 in Prolog, NASM and COBOL) if not. The input values are always positive.
*/

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return fuelLeft >= (distanceToPump / mpg) 
    //Gallons needed = distance / mpg
    //If fuelLeft >= gallons needed we make it!
};

console.log(zeroFuel(100, 50, 1))
// false
console.log(zeroFuel(50, 25, 2))
// true