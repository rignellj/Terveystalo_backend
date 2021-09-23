import { RequestHandler, ErrorRequestHandler } from 'express';

const unknownEndpoint: RequestHandler = (_req, res) => {
	res.status(404).json({ message: 'Unknown endpoint' });
};

const errorHandler: ErrorRequestHandler = (err, _req, res, next): void | Response => {
	const { message } = err;

	console.log('On errorHandler: ', message);
	if (res.headersSent) {
		return next(err);
	}
	res
		.status(err.errorCode || 500)
		.json({ message: message || 'Unknown error occured!' })
};

export default {
	unknownEndpoint,
	errorHandler
}