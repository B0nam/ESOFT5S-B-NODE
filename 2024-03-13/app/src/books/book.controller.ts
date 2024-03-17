import { Request, Response } from 'express'
import bookService from './book.service'

class BookController {

    async getById(req: Request, res: Response) {
        try {
            const book = await bookService.getById(req.params.id);
            return res.json(book);
        } catch (error: any) {
            console.error("[-] Erro ao tentar obter elemento por id")
            return res.status(500).json({ "error": "[-] Erro interno"})
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const books = await bookService.getAll();
            return res.json(books);
        } catch (error: any) {
            console.error("[-] Erro ao tentar obter todos os elementos")
            return res.status(500).json({ "error": "[-] Erro interno"})
        }
    }

    async create(req: Request, res: Response) {
        try {
            const book = await bookService.create(req.body);
            return res.json(book);
        } catch (error: any) {
            console.error("[-] Erro ao tentar criar novo elementos")
            return res.status(500).json({ "error": "[-] Erro interno"})
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const respose = await bookService.delete(req.params.id);
            return res.json(respose);
        } catch (error: any) {
            console.error("[-] Erro ao tentar deletar elemento")
            return res.status(500).json({ "error": "[-] Erro interno"})
        }
    }

    async update(req: Request, res: Response) {
        try {
            const respose = await bookService.update(req.params.id, req.body);
            return res.json(respose);
        } catch (error: any) {
            console.error("[-] Erro ao tentar atualizar elemento")
            return res.status(500).json({ "error": "[-] Erro interno"})
        }
    }
}

export default new BookController()