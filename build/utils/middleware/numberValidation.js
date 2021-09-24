"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateNumber = exports.validateNumbers = void 0;
const validateNumbers = (numbers) => /^(\d|,)+$/.test(numbers);
exports.validateNumbers = validateNumbers;
const validateNumber = (number) => /^\d+$/.test(number);
exports.validateNumber = validateNumber;
