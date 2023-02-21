/*In below class the property name is by default public you can
 read from outside of class and also update value*/
var User1 = /** @class */ (function () {
    function User1() {
        this.name = "aryan";
    }
    return User1;
}());
var u1 = new User1();
console.log(u1.name); //here you can read value from class because property is public
u1.name = "Jayprakash"; //also you can update the value of the property
console.log(u1.name);
/*in below class the property name is read-only so you can
read from outside but not write fro outside of class*/
var User2 = /** @class */ (function () {
    function User2() {
        this.name = "Jatin";
    }
    return User2;
}());
var u2 = new User2();
console.log(u2.name); //here you can only read only not write otherwise it gives an error
/* u2.name = 'Priya';          if you try this then it give an error*/
var user3 = /** @class */ (function () {
    function user3() {
        this.name = "Vaidehi";
    }
    return user3;
}());
var u3 = new user3();
/*  if you try either console.log(u3.name); this or u3.name = 'Pradip' it gives an error*/
