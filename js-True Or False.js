'use strict';

// Task 1
if ("0") {
    alert('Hello');
}
// Yes, because "0" is a non-empty string and evaluates to true.

// Task 2
// Ask the user the question
const question = ' מהו השם הרשמי של JavaScript?';

// Check the user's answer
if (question === "ECMAScript") {
    alert("Correct!");
} else {
    alert("לא יודע? ECMAScript!");
}

// Task 3
let score = 75;
let grade = 
        score >= 90 ? "A" :
        score >= 80 ? "B" :
        score >= 70 ? "C" :
        score >= 60 ? "D" : "F";
console.log("The grade is:", grade);

// Task 4

let number = prompt("הכנס מספר:");
if (number > 1) {
    alert("הערך גדול מאפס");
} else if (number < -1) {
    alert("הערך קטן מאפס");
} else if (number === 0) {
    alert("הערך הוא אפס");
} else {
    alert("הערך לא מוכר");
}

// Task 5
let a = 2;
let b = 1;
let result = (a + b < 4) ? 'Not enough' : 'A lot'
console.log(result);

// Task 6
let login = prompt("הכנס תפקיד:");
let message =
    login === 'Employee' ? 'Hello' :
    login === 'Director' ? 'Hello' :
    login === '' ? 'No login' : '';
console.log(message);

// Task 7
console.log(false || 'sdf'); // sdf
console.log(false && ''); // false
console.log(true || ''); // true 
console.log(true && ''); //  '
console.log(undefined || null); // null 
console.log(undefined || 0 || null); // null 
console.log(undefined && 0 && null); // undefined
console.log(1 || 0); // 1
console.log(null || 1); // 1
console.log(null || 0 || 1) ; // 1

