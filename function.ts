//below add() function's return type is number if we give string as an argument it show an error
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(10, 20));                   //if string is given then it show an error


                                            // below we declare three variable x,y and z 
const x: number = 100;                      //here the datatype of x is number

let y: string = "good morning";             //here the datatype of y is string

const z: number = 50;                       //here the datatype of x is number

function sum(): number {                    //datatype of sum() is number if var y is given as an argument then it show an error
  return z;
}

console.log(sum());

