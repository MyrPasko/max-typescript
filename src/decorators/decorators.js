"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function logged(constructorFn) {
    console.log('[Constructor]', constructorFn);
}
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person = __decorate([
        logged
    ], Person);
    return Person;
}());
// Factory
function logging(value) {
    return value ? logged : null;
}
// @logging(true)
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
// Advanced
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
var Plant = /** @class */ (function () {
    function Plant() {
        this.name = "Green plant";
    }
    Plant = __decorate([
        logged,
        printable
    ], Plant);
    return Plant;
}());
var plant = new Plant();
plant.print();
// Method decorator
// Property decorator
function editable(value) {
    return function (_target, _propName, descriptor) {
        descriptor.writable = value;
    };
}
function overwritable(value) {
    return function (_target, _propName) {
        var newDescriptor = {
            writable: value,
        };
        return newDescriptor;
    };
}
var Project = /** @class */ (function () {
    function Project(name) {
        this.name = name;
        this.projectName = name;
    }
    Project.prototype.calcBudget = function () {
        console.log('[Budget]', 1000);
    };
    __decorate([
        overwritable(true)
    ], Project.prototype, "projectName", void 0);
    __decorate([
        editable(true)
    ], Project.prototype, "calcBudget", null);
    return Project;
}());
var project = new Project('Super project');
project.calcBudget();
project.calcBudget = function () {
    console.log('[Budget]', 2000);
};
project.calcBudget();
// Parameter Decorator
function printInfo(target, methodName, paramIndex) {
    console.log('[Target: ]', target);
    console.log('[Method name: ]', methodName);
    console.log('[Parameter index: ]', paramIndex);
}
var Course = /** @class */ (function () {
    function Course(name) {
        this.name = name;
        this.name = name;
    }
    Course.prototype.printStudentsNumber = function (_mode, printAll) {
        if (printAll) {
            console.log('[All]', 10000);
        }
        else {
            console.log('[Not all]', 2000);
        }
    };
    __decorate([
        __param(0, printInfo), __param(1, printInfo)
    ], Course.prototype, "printStudentsNumber", null);
    return Course;
}());
var course = new Course('Super course');
course.printStudentsNumber('All students', true);
course.printStudentsNumber('Not all students', false);
//# sourceMappingURL=decorators.js.map