import supertest from 'supertest';

import app from '../app';

let URL = '/api/checkprime';
const api = supertest(app);

describe('Check prime endpoint', () => {
	describe('Responds with isPrime: true', () => {
		it('should check if response is returned as JSON and respond that number 2 is prime number', async () => {
			const number = '2';
			const { body } = await api
				.get(`${URL}/?number=${number}`)
				.expect(200)
				.expect('Content-Type', /application\/json/);
			expect(body).toHaveProperty('isPrime', true);
		});
		it('should respond that number 5 is prime number', async () => {
			const number = '5';
			const { body } = await api
				.get(`${URL}/?number=${number}`)
				.expect(200)
			expect(body).toHaveProperty('isPrime', true);
		});
		it('should respond that number 13 is prime number', async () => {
			const number = '13';
			const { body } = await api
				.get(`${URL}/?number=${number}`)
				.expect(200)
			expect(body).toHaveProperty('isPrime', true);
		});
		it('should respond that number 8191 is prime number', async () => {
			const number = '8191';
			const { body } = await api
				.get(`${URL}/?number=${number}`)
				.expect(200)
			expect(body).toHaveProperty('isPrime', true);
		});
		it('should respond that number 6700417 is prime number', async () => {
			const number = '6700417';
			const { body } = await api
				.get(`${URL}/?number=${number}`)
				.expect(200)
			expect(body).toHaveProperty('isPrime', true);
		});
	});
	describe('Responds with isPrime: false', () => {
		it('should respond that number 1 is not prime number', async () => {
			const number = '1';
			const { body } = await api
				.get(`${URL}/?number=${number}`)
				.expect(200)
			expect(body).toHaveProperty('isPrime', false);
		});
		it('should respond that number 0 is not prime number', async () => {
			const number = '0';
			const { body } = await api
				.get(`${URL}/?number=${number}`)
				.expect(200)
			expect(body).toHaveProperty('isPrime', false);
		});
		it('should respond that number 4 is not prime number', async () => {
			const number = '4';
			const { body } = await api
				.get(`${URL}/?number=${number}`)
				.expect(200)
			expect(body).toHaveProperty('isPrime', false);
		});
		it('should respond that number 6 is not prime number', async () => {
			const number = '6';
			const { body } = await api
				.get(`${URL}/?number=${number}`)
				.expect(200)
			expect(body).toHaveProperty('isPrime', false);
		});
	});
	describe('Handles errors correctly', () => {
		it('should respond with "You didn\'t send any input." - message and status code of 400', async () => {
			const number = '';
			const { body } = await api
				.get(`${URL}/?number=${number}`)
				.expect(400);
			expect(body).toHaveProperty('message', 'You didn\'t send any input.');
		});
		it('should respond with "You didn\'t send any input." - message and status code of 400', async () => {
			const { body } = await api
				.get(`${URL}`)
				.expect(400);
			expect(body).toHaveProperty('message', 'You didn\'t send any input.');
		});
		it('should respond with "Only digits are allowed." - message and status code of 400', async () => {
			const number = 'abc,def+0';
			const { body } = await api
				.get(`${URL}/?number=${number}`)
				.expect(400);
			expect(body).toHaveProperty('message', 'Only digits are allowed.');
		});
		it('should respond with "Only digits are allowed." - message and status code of 400', async () => {
			const number = '0+0+1';
			const { body } = await api
				.get(`${URL}/?number=${number}`)
				.expect(400);
			expect(body).toHaveProperty('message', 'Only digits are allowed.');
		});
		it('should respond with "Only digits are allowed." - message and status code of 400', async () => {
			const number = '0,1,1';
			const { body } = await api
				.get(`${URL}/?number=${number}`)
				.expect(400);
			expect(body).toHaveProperty('message', 'Only digits are allowed.');
		});
	});
});
