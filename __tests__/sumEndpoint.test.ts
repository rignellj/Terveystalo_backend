import supertest from 'supertest';

import app from '../app';

let URL = '/api/sum';
const api = supertest(app);

describe('Sum endpoint', () => {
	describe('Responds with isPrime: true', () => {
		it('should check if response is returned as JSON and respond that sum is prime number', async () => {
			const numbers = '1,2';
			const { body } = await api
				.get(`${URL}/?numbers=${numbers}`)
				.expect(200)
				.expect('Content-Type', /application\/json/);
			expect(body).toHaveProperty('isPrime', true);
			expect(body).toHaveProperty('result', 3);
		});
		it('should count 1 + 1 = 2 and respond that sum is prime number', async () => {
			const numbers = '1,1';
			const { body } = await api
				.get(`${URL}/?numbers=${numbers}`)
				.expect(200)
			expect(body).toHaveProperty('isPrime', true);
			expect(body).toHaveProperty('result', 2);
		});
		it('should count 9 + 1 + 3 = 13 and respond that sum is prime number', async () => {
			const numbers = '9,1,3';
			const { body } = await api
				.get(`${URL}/?numbers=${numbers}`)
				.expect(200)
			expect(body).toHaveProperty('isPrime', true);
			expect(body).toHaveProperty('result', 13);
		});
		it('should count 8000 + 100 + 90 + 1 = 8191 and respond that sum is prime number', async () => {
			const numbers = '8000,100,90,1';
			const { body } = await api
				.get(`${URL}/?numbers=${numbers}`)
				.expect(200)
			expect(body).toHaveProperty('isPrime', true);
			expect(body).toHaveProperty('result', 8191);
		});
		it('should count 6700416 + 1 = 6700417 and respond that sum is prime number', async () => {
			const numbers = '6700416,1';
			const { body } = await api
				.get(`${URL}/?numbers=${numbers}`)
				.expect(200)
			expect(body).toHaveProperty('isPrime', true);
			expect(body).toHaveProperty('result', 6700417);
		});
	});
	describe('Responds with isPrime: false', () => {
		it('should count 1 = 1 and respond that sum is not prime number', async () => {
			const numbers = '1';
			const { body } = await api
				.get(`${URL}/?numbers=${numbers}`)
				.expect(200)
			expect(body).toHaveProperty('isPrime', false);
			expect(body).toHaveProperty('result', 1);
		});
		it('should count 0 + 0 = 0 and respond that sum is not prime number', async () => {
			const numbers = '0,0';
			const { body } = await api
				.get(`${URL}/?numbers=${numbers}`)
				.expect(200)
			expect(body).toHaveProperty('isPrime', false);
			expect(body).toHaveProperty('result', 0);
		});
		it('should count 1 + 1 + 1 + 1 = 4 and respond that sum is not prime number', async () => {
			const numbers = '1,1,1,1';
			const { body } = await api
				.get(`${URL}/?numbers=${numbers}`)
				.expect(200)
			expect(body).toHaveProperty('isPrime', false);
			expect(body).toHaveProperty('result', 4);
		});
		it('should count 1 + 0 + 3 + 2 = 6 and respond that sum is not prime number', async () => {
			const numbers = '1,0,3,2';
			const { body } = await api
				.get(`${URL}/?numbers=${numbers}`)
				.expect(200)
			expect(body).toHaveProperty('isPrime', false);
			expect(body).toHaveProperty('result', 6);
		});
	});
	describe('Handles user input correctly', () => {
		it('should count 8 + 55 + 10558 + 0 = 10621 though input has extra commas', async () => {
			const numbers = ',,8,55,,,10558,,,0,,';
			const { body } = await api
				.get(`${URL}/?numbers=${numbers}`)
				.expect(200)
			expect(body).toHaveProperty('isPrime', false);
			expect(body).toHaveProperty('result', 10621);
		});
		it('should return sum of 0 when input has only one comma', async () => {
			const numbers = ',';
			const { body } = await api
				.get(`${URL}/?numbers=${numbers}`)
				.expect(200)
			expect(body).toHaveProperty('isPrime', false);
			expect(body).toHaveProperty('result', 0);
		});
	});
	describe('Handles errors correctly', () => {
		it('should respond with "You didn\'t send any input." - message and status code of 400', async () => {
			const numbers = '';
			const { body } = await api
				.get(`${URL}/?numbers=${numbers}`)
				.expect(400);
			expect(body).toHaveProperty('message', 'You didn\'t send any input.');
		});
		it('should respond with "You didn\'t send any input." - message and status code of 400', async () => {
			const { body } = await api
				.get(`${URL}`)
				.expect(400);
			expect(body).toHaveProperty('message', 'You didn\'t send any input.');
		});
		it('should respond with "Only digits 0-9 and "," are allowed." - message and status code of 400', async () => {
			const numbers = 'abc,def+0';
			const { body } = await api
				.get(`${URL}/?numbers=${numbers}`)
				.expect(400);
			expect(body).toHaveProperty('message', 'Only digits 0-9 and "," are allowed.');
		});
		it('should respond with "Only digits 0-9 and "," are allowed." - message and status code of 400', async () => {
			const numbers = '0+0+1';
			const { body } = await api
				.get(`${URL}/?numbers=${numbers}`)
				.expect(400);
			expect(body).toHaveProperty('message', 'Only digits 0-9 and "," are allowed.');
		});
		it('should respond with "Only digits 0-9 and "," are allowed." - message and status code of 400', async () => {
			const numbers = '0,1 ,1';
			const { body } = await api
				.get(`${URL}/?numbers=${numbers}`)
				.expect(400);
			expect(body).toHaveProperty('message', 'Only digits 0-9 and "," are allowed.');
		});
	});
});
