"use strict";
function sum(a, b, type) {
    if (type === "to_number") {
        return (+a) + (+b);
    }
    else {
        return a.toString() + b.toString();
    }
}
console.log(sum(10, 50, "to_number"));
console.log(sum("Aryan", "Darji", "to_string"));
