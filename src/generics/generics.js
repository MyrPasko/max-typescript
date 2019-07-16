"use strict";
{
    //Simple Generic
    var echo = function (data) {
        return data;
    };
    console.log('[Echo]', echo('Max'));
    console.log('[Echo]', echo(27));
    console.log('[Echo]', echo({ name: 'Max', age: 27 }));
    //Better Generic
    var betterEcho = function betterEcho(data) {
        return data;
    };
    console.log('[Better Echo]', betterEcho('Max').length);
    console.log('[Better Echo]', betterEcho(26));
    console.log('[Better Echo]', betterEcho({ name: 'Max', age: 27 }));
    // Built-in Generics
    var testResult = [1.33, 2.45];
    testResult.push(34);
    // testResult.push('33');
    console.log('[Test results]', testResult);
    // Arrays
    var printAll = function (args) {
        args.forEach(function (element) { return console.log(element); });
    };
    printAll(['Tommy', 'John', 'Mike']);
    // Generic types
    var echo2 = betterEcho;
    console.log('[Echo2]', echo2('SMT'));
    // Generic Classes
    // T and U are something like function parameters for types
    // We can constrain it by keyword extends
    var SimpleMath = /** @class */ (function () {
        // baseValue: T;                            // this approach does not works
        // multiplyValue: T;
        function SimpleMath(baseValue, multiplyValue) {
            this.baseValue = baseValue;
            this.multiplyValue = multiplyValue;
        }
        SimpleMath.prototype.calculate = function () {
            return Number(this.baseValue) * Number(this.multiplyValue);
        };
        return SimpleMath;
    }());
    // const simpleMath = new SimpleMath<number>('10', 20);         // that is how it works uncomment it
    var simpleMath = new SimpleMath(10, '20');
    console.log('[Calculation]', simpleMath.calculate());
    // Creating of generic map class
    var MyMap = /** @class */ (function () {
        function MyMap() {
            this.map = {};
        }
        MyMap.prototype.setItem = function (key, item) {
            this.map[key] = item;
        };
        MyMap.prototype.getItem = function (key) {
            return this.map[key];
        };
        MyMap.prototype.clear = function () {
            this.map = {};
        };
        MyMap.prototype.print = function (key) {
            if (key === void 0) { key = undefined; }
            console.log(key ? key : this.map);
        };
        MyMap.prototype.printMap = function () {
            for (var key in this.map) {
                console.log(key, this.map[key]);
            }
            if (!Object.keys(this.map).length) {
                console.log('[Fuck off!!! There is nothing to print]');
            }
        };
        return MyMap;
    }());
    var stringMap = new MyMap();
    stringMap.setItem('apples', '10');
    stringMap.setItem('bananas', '2');
    stringMap.printMap();
    stringMap.clear();
    stringMap.printMap();
    var numberMap = new MyMap();
    numberMap.setItem('apples', 20);
    numberMap.setItem('bananas', 4);
    numberMap.printMap();
    numberMap.clear();
    numberMap.printMap();
}
//# sourceMappingURL=generics.js.map