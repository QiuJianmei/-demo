'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.do2 = exports.do1 = undefined;

var _mod = require('./mod2.js');

var _mod2 = _interopRequireDefault(_mod);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('加载mod3.js');

function do1() {
    console.log(' mod3.do1被调用');
}
function do2() {
    console.log(' mod3.do1被调用');
    (0, _mod2.default)();
}
exports.do1 = do1;
exports.do2 = do2;