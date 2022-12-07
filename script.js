"use strict";

const days = [23, 57, 23, 35, 77, 11, 29, 53, 57];

const day = days.find((e) => e > 10);
console.log(day);

const isEven = days.some((e) => e % 2 === 0);
console.log(isEven);

const isOdd = days.every((e) => !e % 2 === 0);
console.log(isOdd);

console.log(days.includes(23));
