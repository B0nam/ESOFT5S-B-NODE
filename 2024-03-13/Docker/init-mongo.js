// Arquivo de inicialização do MongoDB

// Conecta-se ao banco de dados
var db = db.getSiblingDB('esoft5s-books');

// Cria a coleção 'books' e insere um documento
db.books.insertOne({
    "title": "Livro 1",
    "author": "Autor 1",
    "ISBN": "1",
    "pageNumber": "1"
});

db.createUser({
    user: "mongouser",
    pwd: "Abacate123",
    roles: [{ role: "readWrite", db: "esoft5s-books" }]
});