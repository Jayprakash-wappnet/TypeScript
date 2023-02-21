var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var createAccount = /** @class */ (function () {
    function createAccount() {
    }
    createAccount.prototype.makeEmail = function (user) {
        return "".concat(user, "@gmail.com");
    };
    return createAccount;
}());
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    User.prototype.addUser = function (user) {
        return "".concat(user, " added as an user");
    };
    return User;
}(createAccount));
var u1 = new User();
console.log(u1.addUser('Aryan darji'));
console.log(u1.makeEmail('Aryan darji'));
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.addEmployee = function (empName) {
        return "".concat(empName, " is added as an employee");
    };
    return Employee;
}(createAccount));
var emp = new Employee();
console.log(emp.addEmployee('Hitesh'));
console.log(emp.makeEmail('Hitesh'));
