"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const middleware_1 = __importDefault(require("./utils/middleware"));
const sum_1 = __importDefault(require("./routes/sum"));
const checkPrime_1 = __importDefault(require("./routes/checkPrime"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    methods: ['GET']
}));
app.use('/api/sum', sum_1.default);
app.use('/api/checkprime', checkPrime_1.default);
app.use(middleware_1.default.unknownEndpoint);
app.use(middleware_1.default.errorHandler);
exports.default = app;
