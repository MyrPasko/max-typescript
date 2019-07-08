"use strict";
{
    var greet = function (person) {
        console.log("Hello, " + person.name);
    };
    var changeName = function (person) {
        person.name = 'Anna';
    };
    var person_1 = {
        name: 'Max',
        age: 32,
        hobbies: ['Cook', 'Sports'],
        greet: function (lastName) {
            // console.log(`Hello, my name is ${this.name} and my surname is ${lastName}`);
            console.log("Hello, my name is " + this.name + " and my surname is " + lastName);
        }
    };
    greet(person_1);
    changeName(person_1);
    greet(person_1);
    person_1.greet('Vasya');
    var classPerson = /** @class */ (function () {
        function classPerson(name, lastName) {
            this.name = name;
            this.lastName = lastName;
        }
        classPerson.prototype.greet = function (lastName) {
            console.log("Hello, my name is " + this.name + " and my surname is " + lastName);
        };
        return classPerson;
    }());
    var myPerson = new classPerson('Tolik', 'Tommy');
    myPerson.greet('Golub');
    var myDoubleFunction = void 0;
    myDoubleFunction = function (value1, value2) {
        return (value1 + value2) * 2;
    };
    console.log('[Double function]', myDoubleFunction(10, 20));
    var oldPerson = {
        age: 26,
        name: 'max',
        greet: function (lastName) {
            console.log("Hello, " + this.name + " " + lastName);
        }
    };
    console.log('[Old Person]', oldPerson);
}
//# sourceMappingURL=interfaces.js.map