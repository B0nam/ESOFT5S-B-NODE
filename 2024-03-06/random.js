// CRIAR UM NOVO ARRAY QUE ARMAZENE 3 PRODUTOS DE FORMA ALEATORIA
// OS PRODUTOS NAO PODEM SER REPETIDOS

const produtos = [ {nome: "Caneta", qtde: 20, valor: 2.50},
                   {nome: "Impressora", qtde: 2, valor: 850.99},
                   {nome: "Mouse", qtde: 15, valor: 67.00},
                   {nome: "Headset", qtde: 5, valor: 350},
                   {nome: "Tenis", qtde: 50, valor: 750.50},
                   {nome: "Celular", qtde: 10, valor: 1000.00} ];

function getRandomProduct(produtos)
{
    const randomElement = Math.floor(Math.random() * (produtos.length));
    return produtos[randomElement];
};

function getDifferentProducts(number, produtos)
{
    if (number > produtos.length)
    {
        console.log("ERRO: O numero de elementos desejados é maior do que o numero de produtos.");
        return 0;  
    }

    let multipleProducts = [];

    for (let x = 0; x < number; x++)
    {
        let newProduct = getRandomProduct(produtos);
        while(multipleProducts.includes(newProduct))
        {
            newProduct = getRandomProduct(produtos);
        }
        multipleProducts.push(newProduct);
        
    }

    console.log(multipleProducts);
};

getDifferentProducts(3, produtos);