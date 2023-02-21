class createAccount{
    makeEmail(user){
        return `${user}@gmail.com`;
    }
}

class User extends createAccount{
    addUser(user){
        return `${user} added as an user`;
    }
}
const u1 = new User();
console.log(u1.addUser('Aryan darji'));
console.log(u1.makeEmail('Aryan darji'));


class Employee extends createAccount{
    addEmployee(empName){
        return `${empName} is added as an employee`;
    }
}

let emp = new Employee();
console.log(emp.addEmployee('Hitesh'));
console.log(emp.makeEmail('Hitesh'));
