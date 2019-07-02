"use strict";
/// <reference path="namespaces.ts">
var MyMath;
/// <reference path="namespaces.ts">
(function (MyMath) {
    var PI = 3.14;
    function calcCircumference(diameter) {
        return diameter * PI;
    }
    MyMath.calcCircumference = calcCircumference;
})(MyMath || (MyMath = {}));
//# sourceMappingURL=circleMath.js.map