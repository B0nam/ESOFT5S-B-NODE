import { Request, Response } from 'express'
import { BookService } from './book.service'

class BookController {

    async getById(req: Request, res: Response) {
        const book = await new BookService().getById(req.params.id);
        return res.json(book)
    }

    async getAll(req: Request, res: Response) {
        const books = await new BookService().getAll();
        return res.json(books);
    }

    async create(req: Request, res: Response) {
        const book = await new BookService().create(req.body)
        return res.json(book)
    }
}

export default new BookController()