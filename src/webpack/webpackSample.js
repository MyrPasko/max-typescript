"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var anotherWebpackSample_1 = __importDefault(require("./anotherWebpackSample"));
var button = document.getElementById('btn');
button.addEventListener('click', function (e) {
    console.log('[Test property]', anotherWebpackSample_1.default);
    console.log(e);
});
//# sourceMappingURL=webpackSample.js.map