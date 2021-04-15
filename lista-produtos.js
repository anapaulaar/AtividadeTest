var contador = 0
var produtos = [
{ 
    nome: 'Amendoim',
    preco: 1.99,
    estoque: 5
},
{ 
    nome: 'Paçoca',
    preco: 0.99,
    estoque: 10
},
{ 
    nome: 'Cocada',
    preco: 3.50,
    estoque: 7
},
{ 
    nome: 'Doce de leite',
    preco: 1.99,
    estoque: 15
},
{ 
    nome: 'Doce de ninho',
    preco: 1.99,
    estoque: 0
}
]

//Filtrando Estoque
function filtrarEstoque (todosProdutos){
    return todosProdutos.filter(produto => produto.estoque)
}

filtrarEstoque (produtos)
    .forEach(produto => console.log(`Produtos com estoque: ${produto.nome} - preço: ${produto.preco}`));

//Ordenando preços
produtos.sort(function (a, b){
    return a.preco - b.preco;
});

console.log(produtos)

var total = produtos.reduce((total, valor) => total + valor.preco, 0)

console.log(total)