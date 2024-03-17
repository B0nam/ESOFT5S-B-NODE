import { Router } from 'express'
import bookController from './src/books/book.controller'

const routes = Router()
routes.get('/health-check', (req, res) =>
{
    res.send("It's Alive!")
})

// GET ALL
routes.get('/books', bookController.getAll);
// GET BY ID
routes.get('/books/:id', bookController.getById);
// CREATE BOOK
routes.post('/books', bookController.create);
// DELETE BOOK BY ID
routes.delete('/books/:id', bookController.delete);
// UPDATE BOOK BY ID
routes.put('/books/:id', bookController.update);

export {
    routes
}