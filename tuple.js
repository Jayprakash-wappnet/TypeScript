"use strict";
//in tuple specified each element with specific datatype
const random = [
    "hello",
    123,
    "world",
    "wappnet",
];
//if we update number instead of string it give an error because at index 0 data type is string
random[0] = "Good";
random.push(true);
console.log(random);
