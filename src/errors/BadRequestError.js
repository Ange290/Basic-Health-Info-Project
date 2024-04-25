import customError from "./customerror";
export class BadRequestError extends customError {
    constructor(message) {
        super(message);
        this.statusCode = 400;
    }
}