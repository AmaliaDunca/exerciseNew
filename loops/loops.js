"use strict";
let i;

/* 
for (i = 0; i < 10; i++) {
  //console.log(i);
}
console.log(`Áfter the loop couter is ${i}`);
 
// from 1 to 10
for (i = 1; i <= 10; i++) {
  console.log(i);
}


//From 10 to 0, followed by the text: “liftoff”  console.log(“liftoff”)

for (i = 10; i >= 0; i--) {
  console.log(`${i} liftoff `);
}


//From 1 to 19, but only odd numbers

for (i = 1; i < 20; i++) {
  if (i % 2 === 0) continue;
  else {
    console.log(i);
  }
}
*/
//From 1 to 16777216, but doubling each time (2, 4, 8, 16 …)

for (i = 2; i <= 16777216; i *= i) {
  console.log(i);
}

/*
//From 111 to 138, in steps of three

for (i = 111; i <= 138; i += 3) {
  console.log(i);
}


//From 100 to 0 in steps of 10

for (i = 100; i >= 0; i -= 10) {
  console.log(i);
}
*/
