function sum(a:number | string,b:number | string,type: "to_string" | "to_number"){
    if(type === "to_number"){
        return (+a)+(+b);
    }
    else
    {
        return a.toString() + b.toString();
    }

}
 console.log(sum(10,50,"to_number"));
 console.log(sum("Aryan","Darji","to_string"));

 