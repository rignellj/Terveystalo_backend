import { Request, Response, NextFunction } from 'express';

import isPrime from '../utils/count/isPrime';
import HttpError from '../utils/httpError';
import { validateNumber } from '../utils/middleware/numberValidation';

const checkprime = (req: Request, res: Response, next: NextFunction) => {
	const { query: { number } } = req;

	try {
		if (!number) {
			throw new HttpError('Check your input', 400);
		}
		const num = number as string;
		if (!validateNumber(num)) {
			throw new HttpError('Check your input', 400);
		}
		if (isPrime(+num)) {
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
	checkprime
};
