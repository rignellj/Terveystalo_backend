"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sum_1 = __importDefault(require("../controllers/sum"));
const router = (0, express_1.Router)();
router.get('/', sum_1.default.sum);
exports.default = router;
