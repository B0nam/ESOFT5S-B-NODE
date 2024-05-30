import { HttpException, HttpStatus } from "@nestjs/common";

export class ProductError extends HttpException {
    constructor(status: HttpStatus, message: string, id: string) {
        super({ id, message }, status);
    }
}