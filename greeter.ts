class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string, public decimal: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName + " " + decimal;
    }
}
interface Person {
    firstName: string;
    lastName: string;
    decimal : string;
}

function greeter(person: Student) {

    return "Hello, " + person.firstName + " " + person.middleInitial + " " + person.lastName + " " + person.decimal;
}

var user = new Student("Jhon", "M.", "5!", '01020616250000120304');
document.body.innerHTML = greeter(user);
