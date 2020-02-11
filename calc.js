const sum = require('./sum');
const multiply = require('./multiply');
const divide = require('./divide');
const subtract = require('./subtract.js');
const square = require('./square.js');
const root = require('./sroot.js');

class calc {
    static sum(a,b) {
        return sum(a,b);
    }

    static product(a,b) {
        return multiply(a,b);
    }

    static quotient(a,b) {
        return divide(a,b);
    }

    static difference(a,b) {
        return subtract(a,b);
    }

    static sqroot(a) {
        return root(a);
    }

    static square(a) {
        return square(a);
    }
}

module.exports = calc;