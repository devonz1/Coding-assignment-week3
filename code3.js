

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
    return accumulator + value;
}, 0);

console.log(sum);