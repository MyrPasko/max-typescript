"use strict";
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
        return this.data;
    }
};
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
