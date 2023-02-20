let emp_id : string | number = 10; //here the string | id is union of two datatype

//alternate way

function  uni(a:number | string,b:number | string){
    if(typeof a === 'number' && typeof b === 'number'){
        return a+b;

    }
    else
    {
        return a.toString() + b.toString();
    }
}

console.log(uni(10,15));
console.log(uni("JAYPRAKASH","DARJI"));

