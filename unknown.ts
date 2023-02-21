//if we use any datatype and assign the variable to any other variable then it not show any error
let Details: any;
Details =  Aryan;
Details = 9772165655;
Details = true;

/*here the variable "data"'s datatype string and assign the variable 
"Details" to the "data" but it not show any type of error*/
let data: string;

data = Details;

//If give unknown data type to the variable

let info: unknown;

info = 123;
info = "Good morning";
info = undefined;
info = false;

let address: string;

// address = info;

/*here we not assign info to the address because the unknown datatype 
not allow to assign any other variable which data type is different*/
