// ==========================================
// [S1] VS Code Setup and First JavaScript Execution
// ==========================================

alert("Welcome! Welcome to my portfolio.");

// Console output test
console.log("This message is recorded in the secret diary.");

// Difference between let and const
let myName = "sudeep";
console.log(myName);

myName = "chaudhary";
console.log(myName);

const birthYear = 2004;
console.log(birthYear);


// ==========================================
// [S2] Debugging Basics and Control Flow
// ==========================================

// 1. ReferenceError (Variable name typo)
// let favoriteColor = "Blue";
// console.log(favouriteColor);

// 2. ReferenceError (Missing quotes for a string)
// let myCity = "Seoul";
// console.log(myCity);

// 3. SyntaxError (Missing parenthesis)
// console.log("Portfolio life granted!");


// [S2] Getting User Input
// let userName = prompt("What is your name?");
// console.log("Welcome, " + userName + "!");


// ==========================================
// [S3] Personalized Welcome Message
// ==========================================

// Ask the visitor for their name
let visitorName = prompt("What is your name?");

// Get the current computer's hour
let currentHour = new Date().getHours();

console.log("The current hour is: " + currentHour);

// Display a personalized greeting
if (currentHour < 12) {
    console.log("Good morning, " + visitorName + "!");
} else if (currentHour < 18) {
    console.log("Good afternoon, " + visitorName + "!");
} else {
    console.log("Good evening, " + visitorName + "!");
}


// ==========================================
// [S3] Logical Error Debugging Examples
// ==========================================

// 1. Reversed condition order (Logical Error)
/*
let testHour = 10;

if (testHour < 18) {
    console.log("Good afternoon!");
} else if (testHour < 12) {
    console.log("Good morning!");
} else {
    console.log("Good evening!");
}
*/

// 2. Incorrect use of Logical Operators (|| and &&)
/*
let isWeekend = true;
let testHour2 = 10;

// Incorrect example (Using OR)
if (isWeekend || testHour2 < 12) {
    console.log(
        "[Incorrect Result] A weekend morning has dawned! Are you resting well?"
    );
}

// Correct example (Using AND)
if (isWeekend && testHour2 < 12) {
    console.log(
        "[Correct Result] A weekend morning has dawned! Are you resting well?"
    );
}
*/


// ==========================================
// [S4] Age and Days Lived Calculation
// ==========================================

// Ask the visitor for their birth year
let visitorBirthYear = Number(
    prompt("What is your birth year?")
);

// Get the current year
let currentYear = new Date().getFullYear();

// Validate the birth year before calculating
if (
    Number.isInteger(visitorBirthYear) &&
    visitorBirthYear > 0 &&
    visitorBirthYear <= currentYear
) {
    // Calculate age
    let age = currentYear - visitorBirthYear;

    // Calculate approximate days lived
    let daysLived = age * 365;

    console.log("Your age is " + age + " years.");

    console.log(
        "You have lived for approximately " +
        daysLived +
        " days!"
    );

    // ==========================================
    // [S5] Adult or Minor Verification
    // ==========================================

    if (age >= 18) {
        console.log("You are an adult.");
    } else {
        console.log("You are a minor.");
    }

} else {
    console.log("Invalid birth year. Please try again.");
}
