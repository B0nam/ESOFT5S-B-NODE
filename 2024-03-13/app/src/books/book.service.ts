import bookModel from './book.schema'

export class BookService {

    async getById(id: string) {
        return await bookModel.findById(id);
    }

    async getAll() {
        return await bookModel.find({});
    }

    async create(book: any) {
        const createdBook = bookModel.create(book)
        return createdBook
    }

}
