import { Router } from 'express'
import bookController from './src/books/book.controller'

const routes = Router()
routes.get('/health-check', (req, res) =>
{
    res.send("It's Alive!")
})

routes.get('/books', bookController.getAll);
routes.get('/books/:id', bookController.getById);
routes.post('/books', bookController.create);

export {
    routes
}