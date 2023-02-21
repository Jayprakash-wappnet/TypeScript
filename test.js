"use strict";
function add(n1, n2) {
    return n1 + n2;
}
let result = add(10, 15);
console.log(result);
function str(fname, lname) {
    return "The Employee First Name is " + fname + "and surname is" + lname;
}
let details = str("Aryan", "Darji");
console.log(details);
//type Inference
let rollNum = 101; // if we declare any variable first as number then it automatically set datatype Number
rollNum = 202; //in place of 202 if we give any string it give an error
let demo; // if we not declare any type of variable then it automatically take "any" as data type
demo = 100;
demo = "Jayprakash";
demo = true;
