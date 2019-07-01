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
//# sourceMappingURL=classes.js.map