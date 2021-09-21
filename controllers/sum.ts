import { Request, Response, NextFunction } from 'express';

import isPrime from '../utils/count/isPrime';
import sumOfNumbers from '../utils/count/sumOfNumbers';
import HttpError from '../utils/httpError';
import { validateNumbers } from '../utils/middleware/numberValidation';

const sum = (req: Request, res: Response, next: NextFunction) => {
	const { query: { numbers } } = req;

	try {
		if (!numbers) {
			throw new HttpError('Check your input', 400);
		}
		const nums = numbers as string;
		if (!validateNumbers(nums)) {
			throw new HttpError('Check your input', 400);
		}
		const sum = sumOfNumbers(nums);
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