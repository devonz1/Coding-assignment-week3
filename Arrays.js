

// 1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array
console.log(ages[ages.length - 1] - ages[0]);


    /* b.	Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).*/        ages.push(10);
ages.push(10);
console.log(ages[ages.length - 1] - ages[0]);


//Use a loop to iterate through the array and calculate the average age. 
//Print the result to the console.

let avgAge = 0;
let totalAge = 0;

for (let i = 0; i < ages.length; i++) {
    totalAge = totalAge + ages[i];
    //totalAge += ages[i];
}
console.log("All ages add to a total of " + totalAge);
//240
avgAge = totalAge / ages.length;
console.log("Ages array length is currently " + ages.length);
console.log("Average of all ages is " + avgAge);

//Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"
];

//Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
let avgNames = 3;


for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

console.log("the average number of letters are " + avgNames);

//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.

for (let i = 0; i < names.length; i++) {
    console.log(names.join(' '));
}

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

//Create a new array called nameLengths 
//Write a loop to iterate over the previously created 
//namesArray and add the length of each name to the nameLengths array.

let namesArray = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"
];

let nameLengths = namesArray.map(function (word) {
    return word.length
});

console.log(nameLengths);

//Write a loop to iterate over the nameLengths array and calculate the sum of 
//all the elements in the array. Print the result to the console.

let sum = nameLengths.reduce((accumulator, value) => {
    // return accumulator + value;
}, 0);

//console.log(sum);


//Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, 
// I would expect the function to return ‘HelloHelloHello’).
function pere(word, n) {
    console.log(word.repeat(n));

}

pere("hello", 5);


//Write a function that takes two parameters, 
//firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).

function people(firstName, lastName) {
    console.log(firstName + ' ' + lastName)
}

people('dana', 'white');

//Write a function that takes an array of numbers and 
//returns true if the sum of all the numbers in the array is greater than 100.

const nums = [10, 12, 13, 15];

nums.every(numbers)
function numbers(checkNum) {
    return checkNum > 100;
}

console.log(numbers(nums));
//Write a function that takes an array of numbers and returns 
//the average of all the elements in the array.

const newNumbers = [7, 10, 15, 22, 17];

var sun = 0;

for (var number of newNumbers) {
    sun += number;
}

average = sun / newNumbers.length;

console.log(average);

//Write a function that takes two arrays of numbers and returns true if the average of the elements in the first 
//array is greater than the average of the elements in the second array.


const numb1 = [2, 3, 5, 6];
const numb2 = [6, 8, 9, 10];

var sunn = 0;

var sue = 0;

for (var num of numb1) {
    sunn += num;
}

for (var nu of numb2) {
    sue += nu;
}

averages = sunn / numb1.length;
aver = sue / numb2.length;


function avgr(averages) {
    if (averages < 18.2) {
        console.log(true)
    } else
        console.log(false)
}


avgr(4);



//Write a function called willBuyDrink that takes a boolean isHotOutside,
// and a number moneyInPocket, and returns true 
//if it is hot outside and if moneyInPocket is greater than 10.50.
isHotOutside = true;
moneyInPocket = 11;

function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside === true && moneyInPocket > 10.50) {
        console.log("true")
    } else
        console.log("false")
}


willBuyDrink(isHotOutside, moneyInPocket);



//Create a function of your own that solves a problem. 
//In comments, write what the function does and why you created it.
//this is a 4 digit password generator it will generate a 4 digit password
//with letters from a -z  and 1-9 and up to 4 characters in length.

function generatePassword() {
    var length = 4,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n)); //math.floor will make
        //sure the number that comes out is always a whole number and Math.random sure
        //any range of number thats used is in between the range of numbers set by the charset variable
    }
    return retVal;
}

console.log(generatePassword()); //when you call the function it will generate a password
//set by the rules within the body of the function.

//Ive always wanted to create a random password generator because coming
//up with new passwords on my own is such a pain and this function takes
//all the guessing and thinking out of it . and its perfect whether you need a 4 digit password
//or 6 you can just adjust the length variable value and you get another new
//random password .