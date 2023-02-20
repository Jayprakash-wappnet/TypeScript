//string[] is display thr datatype of array is string.
var animal = ["Tiger", "Lion", "elephant", "Monkey"];
//if you have few number of element in then you give datatype as follow:
var random1 = ["abc", 987, false];
//If you have very large number of element in array then give any or default
var random2 = [
    "xyz",
    123,
    true,
    "xyz",
    123,
    true,
    123,
    true,
    "xyz",
    123,
    true,
    "xyz",
    123,
    true,
    "xyz",
    123,
    true,
    "xyz",
    123,
    true,
    "xyz",
    123,
    true,
    "xyz",
    123,
    true,
    "xyz",
    123,
    true,
    "xyz",
    123,
    true,
];
//update value
animal[1] = "Horse"; //In place of "Horse" if you give any number then show an error because of the datatype of array animal is string
//add value in array
animal.push("camel");
console.log(animal);
