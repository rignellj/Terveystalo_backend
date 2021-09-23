import { Request, Response, NextFunction } from 'express';

import isPrime from '../utils/count/isPrime';
import sumOfNumbers from '../utils/count/sumOfNumbers';
import HttpError from '../utils/httpError';
import { validateNumbers } from '../utils/middleware/numberValidation';

const sum = (req: Request, res: Response, next: NextFunction) => {
	const { query: { numbers: numbersQuery } } = req;

	try {
		if (!numbersQuery) {
			throw new HttpError('You didn\'t send any input.', 400);
		}
		const numbers = numbersQuery as string;
		if (!validateNumbers(numbers)) {
			throw new HttpError('Only digits 0-9 and "," are allowed.', 400);
		}
		const sum = sumOfNumbers(numbers);
		if (isPrime(sum)) {
			res.status(200).json({ result: sum, isPrime: true });
		} else {
			res.status(200).json({ result: sum, isPrime: false });
		}
	} catch (error) {
		next(error);
		return error;
	}
};

export default {
	sum
};