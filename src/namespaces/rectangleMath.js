"use strict";
/// <reference path="namespaces.ts">
var MyMath;
(function (MyMath) {
    function calcRectangle(width, height) {
        return width * height;
    }
    MyMath.calcRectangle = calcRectangle;
})(MyMath || (MyMath = {}));
//# sourceMappingURL=rectangleMath.js.map