// string
let myName = 'Max'; //automatically assing string type
// myName = 33;

// number
let myAge = 32.5; //no matter is it a float or not
// myAge = '33';

// boolean
let hasHobbies = false;
// hasHobbies = 1;

// assign types
// let myRealAge; //type any
let myRealAge: number;
myRealAge = 32;
// myRealAge = '32';

// array
let hobbies = ["Cooking", "Sport"];
console.log('[Hobbies]', typeof  hobbies);
console.log('[Hobbies]', Array.isArray(hobbies));

// tuples - array with the different values
let address: [string, number] = ["Superstreet", 99]; // order is important

// enums
enum Color {
    Gray,
    Green = 10,
    Blue
}
let myColor: Color = Color.Green;
let hisColor: Color = Color.Blue;
console.log('[Enum]', myColor);
console.log('[Enum Blue]', hisColor);
console.log('[Enum Blue]', Color[10]);

// any like all other types in JS  ))))

// functions
function returnMyName(): string {
    return myName;
}
console.log('[Return my name]', returnMyName());

// arguments types
function pow(value1: number, value2: number): number {
    return value1 * value2;
}
console.log('[Pow]', pow(10, 5));

// function types
let myMultiply: (value1: number, value2: number) => number; // functional type
myMultiply = pow;
console.log('[My Multiply]', myMultiply(10, 4));

// objects
// order can change, so only names are important
interface IUserData {
    name: string;
    age: number;
}

let userData: IUserData = {
    name: "Max",
    age: 32,
};
// userData = {
//     a: false,
//     b: 'top',
// };

// put it all together
// interface IComplex {
//     data: number[],
//     output: (all: boolean) => number[],
// }

type Complex = {data: number[], output: (all: boolean) => number[]};

let complex: Complex = {
    data: [100, 3.99, 10],

    output: function (all: boolean) {
        return this.data;
    }
};

// union types
let realRealAge: string | number;
realRealAge = 27;
realRealAge = '27';

// never
function neverReturns(): never { // if the function never returns like in that case about new Error
    throw new Error('An error!')
}

// Nullable types We can add strict check in tsconfig file strictNullChecks: true
// which can trow an error if we try to set Null to some initialized variable,
// but we can avoid it by using union type smt | null.
let canBeNull: number | null = 10;
canBeNull = null;
let canNotBeNull;
canNotBeNull = null;

// Exercise

type BankAccount = {
    money: number,
    deposit: (value: number) => void,
}

type MySelf = {
    name: string,
    bankAccount: BankAccount,
    hobbies: string[],
}

let bankAccount: BankAccount = {
    money: 2000,
    deposit(value: number): void {
        this.money += value;
    }
};

let mySelf: MySelf = {
    name: 'Max',
    bankAccount: bankAccount,
    hobbies: ['Sports', 'Cooking'],
};

mySelf.bankAccount.deposit(3000);

console.log('[My money]', bankAccount.money);


















