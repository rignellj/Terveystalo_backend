import { Request, Response, NextFunction } from 'express';

import isPrime from '../utils/count/isPrime';
import HttpError from '../utils/httpError';
import { validateNumber } from '../utils/middleware/numberValidation';

const checkPrime = (req: Request, res: Response, next: NextFunction) => {
	const { query: { number: numberQuery } } = req;

	try {
		if (!numberQuery) {
			throw new HttpError('You didn\'t send any input.', 400);
		}
		const number = numberQuery as string;
		if (!validateNumber(number)) {
			throw new HttpError('Only digits are allowed.', 400);
		}
		if (isPrime(+number)) {
			res.status(200).json({ isPrime: true });
		} else {
			res.status(200).json({ isPrime: false });
		}
	} catch (error) {
		next(error);
		return error;
	}
};

export default {
	checkPrime
};
