// armazenamento da lista de livros (um array que vai armazenar os títulos dos livros)
let livros = [];
// mapa para autores (um objeto que associa o título do livro ao autor)
let autores = new Map();
// conj dos generos (um conjunto para garantir que não haja gêneros repetidos)
let generos = new Set(); 

function adicionarLivro(titulo, autor, genero) {
// Adiciona o título na lista de livros
livros.push(titulo);

//adicionar o titulo do livro e o autor no mapa
autores.set(titulo, autor);

// adicionar genero no conjunto, evitando a duplicidade
generos.add(genero);

}

//funções para remorver livros:
function removerLivros(titulo) {

// remover livros da lista
let index = livros.indexOf(titulo); // para encontrar a posição do livro na lista 
if (index !== -1) { // se o livro existir na lista
    livros.splice(index, 1); // para remover o livro 
}

//remover o autor do  mapa 
autores.delete(titulo);
}

// criando a função para listar os livros 
function listarLivros() {
    //para exibir todos os livros da lista
console.log("Livros na Biblioteca:");
for (let i= 0; i <livros.length; i++) {
    console.log(livros[i]); 
    }
}

// verificando as disponibilidades de livros
function verificarDisponibilidade(titulo) {
    // verificar se o livro está na lista
    if (livros.includes(titulo)) {
        console.log(`O livro "${titulo}" está disponível.`);
    } else {
        console.log(`O livro "${titulo}" não está disponível.`);
    }
}

//buscando livros por generos
function BuscarLivrosPorGenero(genero) {
    let LivrosPorGenero = [];

//verificando todos os livros e se o genero esta correspondendo
for (let i = 0; i < livros.length; i++) {
    if (generos.has(genero)) {   //se o genero estiver em conjunto 
        LivrosPorGenero.push(livros[i]);
    }
}
    return LivrosPorGenero;

}

// adicionando livros:
adicionarLivro("Turma da Monica", "Mauricio Araújo de Sousa", "Animação");
adicionarLivro("Um amor para recordar", "Nicholas Sparks", "Romance");
adicionarLivro("Diario de Anne Frank", "Anne Frank","Biografia"); 
adicionarLivro("Harry Potter e a pedra Filosofal", "J.K. Rowling", "Fantasia")

// listando os livros
listarLivros();

// verificando a disponibilidade de um livro:
verificarDisponibilidade("Turma da Monica"); 

// removendo um livro
removerLivros("Um amor para recordar");

//listando um livro depois de remover 
listarLivros();

//pesquisando livro por generos:
let LivrosFantasia = BuscarLivrosPorGenero ("Fantasia");
console.log("Livros de Fantasia", LivrosFantasia);
