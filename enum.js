var Company;
(function (Company) {
    Company[Company["Manager"] = 0] = "Manager";
    Company[Company["Admin"] = 1] = "Admin";
    Company[Company["Owner"] = 2] = "Owner";
    Company[Company["CTO"] = 3] = "CTO";
    Company[Company["Employee"] = 4] = "Employee";
    Company[Company["Client"] = 5] = "Client";
})(Company || (Company = {}));
console.log(Company);
console.log(Company.Employee);
