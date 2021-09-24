"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isPrime_1 = __importDefault(require("../utils/count/isPrime"));
const sumOfNumbers_1 = __importDefault(require("../utils/count/sumOfNumbers"));
const httpError_1 = __importDefault(require("../utils/httpError"));
const numberValidation_1 = require("../utils/middleware/numberValidation");
const sum = (req, res, next) => {
    const { query: { numbers: numbersQuery } } = req;
    try {
        if (!numbersQuery) {
            throw new httpError_1.default('You didn\'t send any input.', 400);
        }
        const numbers = numbersQuery;
        if (!(0, numberValidation_1.validateNumbers)(numbers)) {
            throw new httpError_1.default('Only digits 0-9 and "," are allowed.', 400);
        }
        const sum = (0, sumOfNumbers_1.default)(numbers);
        if ((0, isPrime_1.default)(sum)) {
            res.status(200).json({ result: sum, isPrime: true });
        }
        else {
            res.status(200).json({ result: sum, isPrime: false });
        }
    }
    catch (error) {
        next(error);
        return error;
    }
};
exports.default = {
    sum
};
