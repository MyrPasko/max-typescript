System.register([], function (exports_1, context_1) {
    "use strict";
    var PI;
    var __moduleName = context_1 && context_1.id;
    function calcCircumference(diameter) {
        return diameter * PI;
    }
    exports_1("calcCircumference", calcCircumference);
    return {
        setters: [],
        execute: function () {
            exports_1("PI", PI = 3.14);
        }
    };
});
//# sourceMappingURL=circle.js.map