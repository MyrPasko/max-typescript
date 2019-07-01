"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, userName) {
        this.userName = userName;
        this.age = 32; // accessible from parent class and child classes too, but not from the outside
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log('[Age]', this.age);
        this.setType('Old man');
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log('[Type]', this.type);
    };
    return Person;
}());
var person = new Person('Max', 'max');
console.log(person.name, person.userName);
person.printAge();
// person.setType('Cool man');                      // wont wort with keyword private
var Max = /** @class */ (function (_super) {
    __extends(Max, _super);
    // name = 'Max';                                   // this will always overrides parent class values
    function Max(username) {
        var _this = _super.call(this, 'Max', username) || this;
        console.log(_this.age); // will work cause this property just protected
        return _this;
        // console.log(this.type)                  // can't work cause this property is private
    }
    return Max;
}(Person));
var user = new Max('Montana');
console.log(user.name);
console.log(user.userName);
// Getters and Setters
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "Default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            this._species = value.length > 3 ? value : "Default";
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log('Plant species before', plant.species);
plant.species = 'Shit';
console.log('Plant species after', plant.species);
// Static properties and methods
var Helpers = /** @class */ (function () {
    function Helpers(name) {
        this.name = name;
        this.anotherShit = this.shit;
    }
    Helpers.calcCircumference = function (rad) {
        return 2 * this.PI * rad;
    };
    Helpers.prototype.shit = function () {
        return this.name;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
var tommy = new Helpers('Tommy');
console.log(Helpers.PI);
console.log(tommy.anotherShit());
// Abstract classes
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "Default";
        this.budget = 1000;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITPRoject = /** @class */ (function (_super) {
    __extends(ITPRoject, _super);
    function ITPRoject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITPRoject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITPRoject;
}(Project));
var newProject = new ITPRoject();
console.log(newProject);
newProject.changeName('Some Shit');
console.log(newProject);
// Private constructors
// It is singletone, only one realization of class in whole application
// We can not create class with keyword "new"
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('Thi Only One');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
// let wrong = new OnlyOne('The Only One');     // it is wrong
var right = OnlyOne.getInstance();
// right.name = "Shit";                            // it is wrong, cause property is readonly
// Exercises
var Car = /** @class */ (function () {
    function Car(name) {
        this.acceleration = 0;
        this.name = name;
    }
    Car.prototype.honk = function () {
        console.log("Toooooooooot!");
    };
    ;
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
// Exercise 2
var BaseObject = /** @class */ (function () {
    function BaseObject() {
        this._width = 0;
        this._height = 0;
    }
    Object.defineProperty(BaseObject.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (newWidth) {
            this._width = newWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseObject.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (newHeight) {
            this._height = newHeight;
        },
        enumerable: true,
        configurable: true
    });
    BaseObject.prototype.calcSize = function () {
        return this.width * this.height;
    };
    return BaseObject;
}());
var rectangle = new BaseObject();
rectangle.width = 10;
rectangle.height = 10;
console.log(rectangle.calcSize());
// // Exercise 3
var AnotherPerson = /** @class */ (function () {
    function AnotherPerson() {
        this._firstName = 'Tommy boy';
    }
    Object.defineProperty(AnotherPerson.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (name) {
            if (name.length > 3) {
                this._firstName = name;
            }
            else {
                this._firstName = "Empty";
            }
        },
        enumerable: true,
        configurable: true
    });
    return AnotherPerson;
}());
;
var littlePerson = new AnotherPerson();
console.log(littlePerson.firstName);
littlePerson.firstName = "Ma";
console.log(littlePerson.firstName);
littlePerson.firstName = "Maximilian";
console.log(littlePerson.firstName);
{
    var myName_1 = 'Max';
    var age = 29;
    var data = [myName_1, age];
    var additionalData = [100, 'Tommy'];
    console.log('[Data]', data);
    console.log('[All Data]', data.concat(additionalData));
}
// function controlMe(isTrue: boolean, smtElse: string) {
//     let result: number;
//     if (isTrue) {
//         result = 10;
//     }
//     return result;
// }
/// <reference path="namespaces.ts">
var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calcCircumference(diameter) {
        return diameter * PI;
    }
    MyMath.calcCircumference = calcCircumference;
})(MyMath || (MyMath = {}));
// namespace MyMath {
//     const PI = 3.14;
//     export function calcCircumference(diameter: number) {
//         return diameter * PI;
//     }
//     export function calcRectangle(width: number, height: number) {
//         return width * height;
//     }
// }
/// <reference path="rectangleMath.ts">
/// <reference path="circleMath.ts">
console.log(MyMath.calcRectangle(5, 10));
console.log(MyMath.calcCircumference(3));
/// <reference path="namespaces.ts">
var MyMath;
(function (MyMath) {
    function calcRectangle(width, height) {
        return width * height;
    }
    MyMath.calcRectangle = calcRectangle;
})(MyMath || (MyMath = {}));
// string
var myName = 'Max'; //automatically assing string type
// myName = 33;
// number
var myAge = 32.5; //no matter is it a float or not
// myAge = '33';
// boolean
var hasHobbies = false;
// hasHobbies = 1;
// assign types
// let myRealAge; //type any
var myRealAge;
myRealAge = 32;
// myRealAge = '32';
// array
var hobbies = ["Cooking", "Sport"];
console.log('[Hobbies]', typeof hobbies);
console.log('[Hobbies]', Array.isArray(hobbies));
// tuples - array with the different values
var address = ["Superstreet", 99]; // order is important
// enums
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 10] = "Green";
    Color[Color["Blue"] = 11] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Green;
var hisColor = Color.Blue;
console.log('[Enum]', myColor);
console.log('[Enum Blue]', hisColor);
console.log('[Enum Blue]', Color[10]);
// any like all other types in JS  ))))
// functions
function returnMyName() {
    return myName;
}
console.log('[Return my name]', returnMyName());
// arguments types
function pow(value1, value2) {
    return value1 * value2;
}
console.log('[Pow]', pow(10, 5));
// function types
var myMultiply; // functional type
myMultiply = pow;
console.log('[My Multiply]', myMultiply(10, 4));
var userData = {
    name: "Max",
    age: 32,
};
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        if (all) {
            return this.data;
        }
        return this.data;
    }
};
complex.output(true);
// union types
var realRealAge;
realRealAge = 27;
realRealAge = '27';
// never
function neverReturns() {
    throw new Error('An error!');
}
// Nullable types We can add strict check in tsconfig file strictNullChecks: true
// which can trow an error if we try to set Null to some initialized variable,
// but we can avoid it by using union type smt | null.
var canBeNull = 10;
canBeNull = null;
var canNotBeNull;
canNotBeNull = null;
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var mySelf = {
    name: 'Max',
    bankAccount: bankAccount,
    hobbies: ['Sports', 'Cooking'],
};
mySelf.bankAccount.deposit(3000);
console.log('[My money]', bankAccount.money);
//# sourceMappingURL=namespaces.js.map