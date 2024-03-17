import bookModel from './book.schema'

class BookService {

    async getById(id: string) {
        return await bookModel.findById(id);
    }

    async getAll() {
        return await bookModel.find({});
    }

    async create(book: any) {
        return await bookModel.create(book);
    }

    async delete(id: string) {
        return await bookModel.findByIdAndDelete(id);
    }

    async update(id: string, book: any) {
        return await bookModel.findByIdAndUpdate(id, book);
    }
}

export default new BookService();
