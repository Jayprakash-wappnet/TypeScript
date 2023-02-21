/*In below class the property name is by default public you can
 read from outside of class and also update value*/

class User1 {
  name = "aryan";
}

let u1 = new User1();
console.log(u1.name); //here you can read value from class because property is public
u1.name = "Jayprakash"; //also you can update the value of the property
console.log(u1.name);

/*in below class the property name is read-only so you can 
read from outside but not write fro outside of class*/

class User2 {
  readonly name = "Jatin";
}

let u2 = new User2();
console.log(u2.name); //here you can only read only not write otherwise it gives an error

/* u2.name = 'Priya';          if you try this then it give an error*/

class user3 {
  private name = "Vaidehi";
}

let u3 = new user3();
/*  if you try either console.log(u3.name); this or u3.name = 'Pradip' it gives an error*/
