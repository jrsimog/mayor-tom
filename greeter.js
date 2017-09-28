var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName, decimal) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.decimal = decimal;
        this.fullName = firstName + " " + middleInitial + " " + lastName + " " + decimal;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.middleInitial + " " + person.lastName + " " + person.decimal;
}
var user = new Student("Jhon", "M.", "5!", '01020616250000120304');
document.body.innerHTML = greeter(user);
