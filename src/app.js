System.register(["../math/circle", "../math/rectangle"], function (exports_1, context_1) {
    "use strict";
    var circle_1, rectangle_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (circle_1_1) {
                circle_1 = circle_1_1;
            },
            function (rectangle_1_1) {
                rectangle_1 = rectangle_1_1;
            }
        ],
        execute: function () {
            console.log('PI', circle_1.PI);
            console.log('Circumference', circle_1.calcCircumference(10));
            console.log('Rectangle', rectangle_1.calcRectangle(10, 10));
        }
    };
});
//# sourceMappingURL=app.js.map