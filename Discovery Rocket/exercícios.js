/* ### Transformar notas escolares

Crie um algoritimo que transforme as notas do sistema númerico para sistema de notas em  caracteres tipo A B C

*de 90 para cima - A
*entre 80 - 89   - B
*entre 70 - 79   - C
*entre 60 - 69   - D
*menor que 60    - F

*/

console.log("------------ Transformar notas escolares -------------")

function pegarNota(nota){
    
    if(nota >= 90){
        console.log('Nota = A')
    } else if(nota >= 80 && nota <= 89) {
        console.log('Nota = B')
    } else if(nota >= 70 && nota <= 79) {
        console.log('Nota = C')
    } else if(nota >= 60 && nota <= 69) {
        console.log('Nota = D')
    } else if(nota <= 60) {
        console.log('Nota = F')
    }

}

pegarNota(89)

console.log("------------ Sistemas de gastos familiares -------------")

let receitas = [600, 500, 125, 10]
let despesas = [700, 369, 55]

function calcularTotal() {

    let totalReceitas = 0
    let totalDespesas = 0
    let saldo = 0

    for (let i = 0; i < receitas.length; i++) {
        totalReceitas += receitas[i]
    }

    for (let value of despesas) {
        totalDespesas += value
    }

    saldo = totalReceitas - totalDespesas

    console.log('Total de receitas: ' + totalReceitas)
    console.log('Total de despesas: ' + totalDespesas)

    if(saldo > 0) {
        console.log('O saldo da familia esta positivo: R$' + saldo.toFixed(2))
    } else if ( saldo === 0) {
        console.log('O saldo da familia esgotou: R$' + saldo.toFixed(2))
    } else {
        console.log('O saldo da familia esta negativo: R$' + saldo.toFixed(2))
    }
}

calcularTotal()

console.log("------------ Buscando e contando dados em Arrays -------------")

const bookByCategory = [
    { 
        category: 'Riqueza',
        books: [
            {
                title: 'Os segredos da mente milionária',
                author: 'T. Harv Eker',
            },
            { 
                title: 'O homem mais rico da Babilônia',
                author: 'George S. Clason',
            },
            { 
                title: 'Pai rico, pai pobre',
                author: 'Robert T. Kiyosaki e Sharon L. Lechter',
            }
        ],
    },
    {
        category: 'Inteligência Emocional',
        books: [
            {
                title: 'Você é Insubstituivel',
                author: 'Augusto Cury'
            },
            {
                title: 'Ansiedade - Como enfrentar o mal do século',
                author: 'Augusto Cury'
            },
            {
                title: 'Os 7 hábitos das pessoas altamente eficazes',
                author: 'Stephen R. Covey'
            }
        ]
    }

]

const totalCategories = bookByCategory.length

console.log(totalCategories)

for(let category of bookByCategory) {
    console.log('Total de livros da categoria: ', category.category)

    console.log(category.books.length)
}

function countAuthors() {
    let authors = [];

    for(let category of bookByCategory) {
        for(let book of category.books) {
            if(authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }

    console.log("Total de altores: " + authors.length)
}

countAuthors()

function booksOfAgustoCury(author) {
    let books = [];

    for(let category of bookByCategory) {
        for(let book of category.books) {
            if(book.author == author) {
                books.push(book.title)
            }
        }
    }

    console.log(`Livros do altor: ${author}: ${books.join(", ")}`)
}

booksOfAgustoCury('Augusto Cury')