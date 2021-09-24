"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isPrime_1 = __importDefault(require("../utils/count/isPrime"));
const httpError_1 = __importDefault(require("../utils/httpError"));
const numberValidation_1 = require("../utils/middleware/numberValidation");
const checkPrime = (req, res, next) => {
    const { query: { number: numberQuery } } = req;
    try {
        if (!numberQuery) {
            throw new httpError_1.default('You didn\'t send any input.', 400);
        }
        const number = numberQuery;
        if (!(0, numberValidation_1.validateNumber)(number)) {
            throw new httpError_1.default('Only digits are allowed.', 400);
        }
        if ((0, isPrime_1.default)(+number)) {
            res.status(200).json({ isPrime: true });
        }
        else {
            res.status(200).json({ isPrime: false });
        }
    }
    catch (error) {
        next(error);
        return error;
    }
};
exports.default = {
    checkPrime
};
