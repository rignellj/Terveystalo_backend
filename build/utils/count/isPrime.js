"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isPrime = (number) => {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
};
exports.default = isPrime;
