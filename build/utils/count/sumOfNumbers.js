"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sumOfNumbers = (numbers) => {
    let arrayOfNumbers = numbers
        .split(',')
        .map(number => parseInt(number))
        .filter(Boolean);
    // In case filter returns empty array
    if (!arrayOfNumbers.length) {
        arrayOfNumbers = [0];
    }
    const sumOfNumbers = arrayOfNumbers
        .reduce((a, b) => a + b);
    return sumOfNumbers;
};
exports.default = sumOfNumbers;
