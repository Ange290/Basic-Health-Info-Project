import customError from "./customerror";
export class NotFoundError extends customError {
    constructor(message) {
        super(message);
        this.statusCode = 404;
    }
}