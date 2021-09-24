"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const checkPrime_1 = __importDefault(require("../controllers/checkPrime"));
const router = (0, express_1.Router)();
router.get('/', checkPrime_1.default.checkPrime);
exports.default = router;
