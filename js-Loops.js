'use strict';

// Task 1
let sum = 0; 
let number1 = 1; 

while (number1 <= 100) {
    sum += number1; 
    number1++; 
}
console.log("Total Sum:", sum);

// Task 2
let num;
do {
    num = prompt("Enter a number: ");
}
while(isNaN(num) || Number(num)<=0);
console.log( num);

// Task  3
const  num1 = 7;
for (let i = 1; i <= 10; i++) {
    console.log(`${num1} x ${i} = ${num1*1}`);
}

// Task 4
const secret = 7; 
for (;;) { 
    let guess = prompt(`נשמע את המספר בין 1 ל-10. נחש עכשיו את המספר! (ניסיון)`);
    if (Number(guess) === secret) {
        alert("צודק! המספר נכון!");
        break; 
    } 
    else {
        alert("לא נכון! נסה שוב.");
    }
}

// Task 5
for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}

// Task 6
let n = 3;

while (n) {
    alert(n--);
}

// Task 7
let i = 0;
while (++i < 5) console.log(i);  // תדפיס: 1, 2, 3, 4

let h= 0;
while (h++ < 5) console.log(h);  // תדפיס: 1, 2, 3, 4, 5

// Task 8
for (let i = 0; i < 5; i++) console.log(i);  // 0, 1, 2, 3, 4

for (let i = 0; i < 5; ++i) console.log(i);  // 0, 1, 2, 3, 4

// Task 9
for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Task 10
let k = 0;
while (k < 3) {
    alert(`number ${k}!`);
    k++;
}

