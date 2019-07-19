"use strict";
// class Person {
//     public name: string;                          // accessible from everywhere
//     private type: string | undefined;             // accessible in the parent class only
//     protected age: number = 32;                   // accessible from parent class and child classes too, but not from the outside
//
//     constructor(name: string, public userName: string) {
//         this.name = name;
//     }
//
//     printAge() {
//         console.log('[Age]', this.age);
//         this.setType('Old man');
//     }
//
//     private setType(type: string) {
//         this.type = type;
//         console.log('[Type]', this.type);
//     }
// }
//
// const person = new Person('Max', 'max');
// console.log(person.name, person.userName);
// person.printAge();
// // person.setType('Cool man');                      // wont wort with keyword private
//
// class Max extends Person {
//     // name = 'Max';                                   // this will always overrides parent class values
//
//     constructor(username: string) {
//         super('Max', username);
//         console.log(this.age)                      // will work cause this property just protected
//         // console.log(this.type)                  // can't work cause this property is private
//     }
// }
//
// const user = new Max('Montana');
// console.log(user.name);
// console.log(user.userName);
//
// // Getters and Setters
//
// class Plant {
//     private _species: string = "Default";
//
//     get species() {
//         return this._species;
//     }
//
//     set species(value: string) {
//         this._species = value.length > 3 ? value : "Default";
//     }
// }
//
// const plant = new Plant();
// console.log('Plant species before', plant.species);
// plant.species = 'Shit';
// console.log('Plant species after', plant.species);
//
// // Static properties and methods
// class Helpers {
//     constructor(public name: string) {
//     }
//     static PI: number = 3.14;
//     static calcCircumference(rad: number) {
//         return 2 * this.PI * rad;
//     }
//
//     shit(): string {
//         return this.name;
//     }
//
//     anotherShit = this.shit
//
// }
//
// const tommy = new Helpers('Tommy');
// console.log(Helpers.PI);
// console.log(tommy.anotherShit());
//
// // Abstract classes
// abstract class Project {                        // class that always must be inherited, some setup for more specific classes
//     projectName: string = "Default"
//     budget: number = 1000;
//
//     abstract changeName(name: string): void;    // needs to be overwritten in child class, abstract is only like Interface
//
//     calcBudget() {
//         return this.budget * 2;
//     }
// }
//
// class ITPRoject extends Project {
//     changeName(name: string): void {
//         this.projectName = name;
//     }
// }
//
// const newProject = new ITPRoject();
// console.log(newProject);
// newProject.changeName('Some Shit');
// console.log(newProject);
//
// // Private constructors
// // It is singletone, only one realization of class in whole application
// // We can not create class with keyword "new"
// class OnlyOne {
//     private static instance: OnlyOne;
//
//     private constructor(public readonly name: string) { }
//
//     static getInstance() {
//         if (!OnlyOne.instance) {
//             OnlyOne.instance = new OnlyOne('Thi Only One');
//         }
//         return OnlyOne.instance;
//     }
// }
//
// // let wrong = new OnlyOne('The Only One');     // it is wrong
// let right = OnlyOne.getInstance();
// // right.name = "Shit";                            // it is wrong, cause property is readonly
//
// // Exercises
// class Car {
//     private name: string;
//     public acceleration: number = 0;
//
//     constructor(name: string) {
//         this.name = name;
//     }
//
//     honk() {
//         console.log("Toooooooooot!");
//     };
//
//     accelerate(speed: number): void {
//         this.acceleration = this.acceleration + speed;
//     }
// }
// var car = new Car("BMW");
// car.honk();
// console.log(car.acceleration);
// car.accelerate(10);
// console.log(car.acceleration);
//
// // Exercise 2
// class BaseObject {
//     private _width: number = 0;
//     private _height: number = 0;
//
//     set width(newWidth: number) {
//         this._width = newWidth;
//     }
//
//     set height(newHeight: number) {
//         this._height = newHeight;
//     }
//
//     get width() {
//         return this._width;
//     }
//
//     get height() {
//         return this._height;
//     }
//
//     calcSize() {
//         return this.width * this.height;
//     }
// }
// const rectangle = new BaseObject();
// rectangle.width = 10;
// rectangle.height = 10;
// console.log(rectangle.calcSize());
// // // Exercise 3
// class AnotherPerson {
//     private _firstName: string = 'Tommy boy';
//
//     get firstName() {
//         return this._firstName;
//     }
//
//     set firstName(name: string) {
//         if (name.length > 3) {
//             this._firstName = name;
//         } else {
//             this._firstName = "Empty";
//         }
//     }
// };
//
// const littlePerson = new AnotherPerson();
// console.log(littlePerson.firstName);
// littlePerson.firstName = "Ma";
// console.log(littlePerson.firstName);
// littlePerson.firstName = "Maximilian";
// console.log(littlePerson.firstName);
//
//
//
//# sourceMappingURL=classes.js.map