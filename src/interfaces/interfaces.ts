{
    interface NamedPerson {
        name: string;
        age?: number;

        greet(lastName: string): void;

        [propName: string]: any;
    }

    const greet = function (person: NamedPerson) {
        console.log("Hello, " + person.name);
    }

    const changeName = function (person: NamedPerson) {
        person.name = 'Anna';
    }

    const person: NamedPerson = {
        name: 'Max',
        age: 32,
        hobbies: ['Cook', 'Sports'],
        greet(lastName: string) {
            // console.log(`Hello, my name is ${this.name} and my surname is ${lastName}`);
            console.log("Hello, my name is " + this.name + " and my surname is " + lastName);
        }
    }

    greet(person);
    changeName(person);
    greet(person);
    person.greet('Vasya');

    class classPerson implements NamedPerson {
        constructor(
            public name: string,
            public lastName: string
        ) {
        }

        greet(lastName: string) {
            console.log("Hello, my name is " + this.name + " and my surname is " + lastName);
        }
    }

    const myPerson = new classPerson('Tolik', 'Tommy');

    myPerson.greet('Golub');

// Function types

    interface DoubleValueFunc {
        (number1: number, number2: number): number;
    }

    let myDoubleFunction: DoubleValueFunc;
    myDoubleFunction = function (value1: number, value2: number): number {
        return (value1 + value2) * 2;
    };

    console.log('[Double function]', myDoubleFunction(10, 20));

    interface AgedPerson extends NamedPerson {
        age: number;                                         // properties can be overwritten by inheritance
    }

    const oldPerson: AgedPerson = {
        age: 26,
        name: 'max',
        greet(lastName: string): void {
            console.log(`Hello, ${this.name} ${lastName}`);
        }
    };

    console.log('[Old Person]', oldPerson);
}





















