export class APIError extends Error {
  constructor(message, statusCode = 500) {
    super(message);
    this.statusCode = statusCode;

    Object.setPrototypeOf(this, APIError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
}