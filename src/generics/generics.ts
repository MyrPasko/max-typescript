// {
//     //Simple Generic
//
//     const echo = function (data: any) {
//         return data;
//     };
//
//     console.log('[Echo]', echo('Max'));
//     console.log('[Echo]', echo(27));
//     console.log('[Echo]', echo({name: 'Max', age: 27}));
//
//     //Better Generic
//
//     const betterEcho = function betterEcho<T>(data: T) {              // T gives us type of data
//         return data;
//     };
//
//     console.log('[Better Echo]', betterEcho('Max').length);
//     console.log('[Better Echo]', betterEcho<number>(26));
//     console.log('[Better Echo]', betterEcho({name: 'Max', age: 27}));
//
//     // Built-in Generics
//
//     const testResult: Array<number> = [1.33, 2.45];
//     testResult.push(34);
//     // testResult.push('33');
//
//     console.log('[Test results]', testResult);
//
//     // Arrays
//
//     const printAll = function <T>(args: T[]) {
//         args.forEach((element) => console.log(element));
//     };
//
//     printAll<string>(['Tommy', 'John', 'Mike']);
//
//     // Generic types
//
//     const echo2: <T>(data: T) => T = betterEcho;
//
//     console.log('[Echo2]', echo2<string>('SMT'));
//
//     // Generic Classes
//
//     // T and U are something like function parameters for types
//     // We can constrain it by keyword extends
//     class SimpleMath<T extends U, U extends number | string> {   // this can extends some types
//         // baseValue: T;                            // this approach does not works
//         // multiplyValue: T;
//
//         constructor(public baseValue: T, public multiplyValue: U) {}
//
//         calculate() {
//             return Number(this.baseValue) * Number(this.multiplyValue);
//         }
//     }
//
//     // const simpleMath = new SimpleMath<number>('10', 20);         // that is how it works uncomment it
//     const simpleMath = new SimpleMath<number, number | string>(10, '20');
//
//     console.log('[Calculation]', simpleMath.calculate());
//
//     // Creating of generic map class
//     class MyMap<T> {
//         private map: {[key: string]: T} = {};
//
//         setItem(key: string, item: T): void {
//             this.map[key] = item;
//         }
//
//         getItem(key: string): T {
//             return this.map[key];
//         }
//
//         clear(): void {
//             this.map = {};
//         }
//
//         print(key = undefined): void {
//             console.log(key ? key : this.map);
//         }
//
//         printMap(): void {
//             for (let key in this.map) {
//                 console.log(key, this.map[key]);
//             }
//
//             if (!Object.keys(this.map).length) {
//                 console.log('[Fuck off!!! There is nothing to print]');
//             }
//         }
//     }
//
//     const stringMap = new MyMap<string>();
//     stringMap.setItem('apples', '10');
//     stringMap.setItem('bananas', '2');
//     stringMap.printMap();
//     stringMap.clear();
//     stringMap.printMap();
//
//     const numberMap = new MyMap<number>();
//     numberMap.setItem('apples', 20);
//     numberMap.setItem('bananas', 4);
//     numberMap.printMap();
//     numberMap.clear();
//     numberMap.printMap();
//  }
