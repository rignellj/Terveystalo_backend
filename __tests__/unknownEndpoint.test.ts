import supertest from 'supertest';

import app from '../app';

let URL = '/unkownEndpoint';
const api = supertest(app);

describe('Unknown endpoint', () => {
	it('should respond with status code of 404 and have message: "Unknown endpoint" as response', async () => {
			const { body } = await api
				.get(URL)
				.expect(404);
			expect(body).toHaveProperty('message', 'Unknown endpoint');
	});
});
