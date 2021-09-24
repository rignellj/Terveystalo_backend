"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
let URL = '/api/checkprime';
const api = (0, supertest_1.default)(app_1.default);
describe('Check prime endpoint', () => {
    describe('Responds with isPrime: true', () => {
        it('should check if response is returned as JSON and respond that number 2 is prime number', () => __awaiter(void 0, void 0, void 0, function* () {
            const number = '2';
            const { body } = yield api
                .get(`${URL}/?number=${number}`)
                .expect(200)
                .expect('Content-Type', /application\/json/);
            expect(body).toHaveProperty('isPrime', true);
        }));
        it('should respond that number 5 is prime number', () => __awaiter(void 0, void 0, void 0, function* () {
            const number = '5';
            const { body } = yield api
                .get(`${URL}/?number=${number}`)
                .expect(200);
            expect(body).toHaveProperty('isPrime', true);
        }));
        it('should respond that number 13 is prime number', () => __awaiter(void 0, void 0, void 0, function* () {
            const number = '13';
            const { body } = yield api
                .get(`${URL}/?number=${number}`)
                .expect(200);
            expect(body).toHaveProperty('isPrime', true);
        }));
        it('should respond that number 8191 is prime number', () => __awaiter(void 0, void 0, void 0, function* () {
            const number = '8191';
            const { body } = yield api
                .get(`${URL}/?number=${number}`)
                .expect(200);
            expect(body).toHaveProperty('isPrime', true);
        }));
        it('should respond that number 6700417 is prime number', () => __awaiter(void 0, void 0, void 0, function* () {
            const number = '6700417';
            const { body } = yield api
                .get(`${URL}/?number=${number}`)
                .expect(200);
            expect(body).toHaveProperty('isPrime', true);
        }));
    });
    describe('Responds with isPrime: false', () => {
        it('should respond that number 1 is not prime number', () => __awaiter(void 0, void 0, void 0, function* () {
            const number = '1';
            const { body } = yield api
                .get(`${URL}/?number=${number}`)
                .expect(200);
            expect(body).toHaveProperty('isPrime', false);
        }));
        it('should respond that number 0 is not prime number', () => __awaiter(void 0, void 0, void 0, function* () {
            const number = '0';
            const { body } = yield api
                .get(`${URL}/?number=${number}`)
                .expect(200);
            expect(body).toHaveProperty('isPrime', false);
        }));
        it('should respond that number 4 is not prime number', () => __awaiter(void 0, void 0, void 0, function* () {
            const number = '4';
            const { body } = yield api
                .get(`${URL}/?number=${number}`)
                .expect(200);
            expect(body).toHaveProperty('isPrime', false);
        }));
        it('should respond that number 6 is not prime number', () => __awaiter(void 0, void 0, void 0, function* () {
            const number = '6';
            const { body } = yield api
                .get(`${URL}/?number=${number}`)
                .expect(200);
            expect(body).toHaveProperty('isPrime', false);
        }));
    });
    describe('Handles errors correctly', () => {
        it('should respond with "You didn\'t send any input." - message and status code of 400', () => __awaiter(void 0, void 0, void 0, function* () {
            const number = '';
            const { body } = yield api
                .get(`${URL}/?number=${number}`)
                .expect(400);
            expect(body).toHaveProperty('message', 'You didn\'t send any input.');
        }));
        it('should respond with "You didn\'t send any input." - message and status code of 400', () => __awaiter(void 0, void 0, void 0, function* () {
            const { body } = yield api
                .get(`${URL}`)
                .expect(400);
            expect(body).toHaveProperty('message', 'You didn\'t send any input.');
        }));
        it('should respond with "Only digits are allowed." - message and status code of 400', () => __awaiter(void 0, void 0, void 0, function* () {
            const number = 'abc,def+0';
            const { body } = yield api
                .get(`${URL}/?number=${number}`)
                .expect(400);
            expect(body).toHaveProperty('message', 'Only digits are allowed.');
        }));
        it('should respond with "Only digits are allowed." - message and status code of 400', () => __awaiter(void 0, void 0, void 0, function* () {
            const number = '0+0+1';
            const { body } = yield api
                .get(`${URL}/?number=${number}`)
                .expect(400);
            expect(body).toHaveProperty('message', 'Only digits are allowed.');
        }));
        it('should respond with "Only digits are allowed." - message and status code of 400', () => __awaiter(void 0, void 0, void 0, function* () {
            const number = '0,1,1';
            const { body } = yield api
                .get(`${URL}/?number=${number}`)
                .expect(400);
            expect(body).toHaveProperty('message', 'Only digits are allowed.');
        }));
    });
});
