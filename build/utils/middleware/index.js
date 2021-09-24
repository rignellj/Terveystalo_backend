"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unknownEndpoint = (_req, res) => {
    res.status(404).json({ message: 'Unknown endpoint' });
};
const errorHandler = (err, _req, res, next) => {
    const { message } = err;
    console.log('On error handler: ', message);
    if (res.headersSent) {
        return next(err);
    }
    res
        .status(err.errorCode || 500)
        .json({ message: message || 'Unknown error occured!' });
};
exports.default = {
    unknownEndpoint,
    errorHandler
};
