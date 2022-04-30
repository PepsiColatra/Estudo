/*
var clima = "Quente"
clima = "frio" 
console.log(clima)
*/

// vamos iniciar um bloco
// {
//     let x = 0
//     console.log(x)
//     // aqui dentro é um bloco e posso colocar qualqer código
// } // aqui fechamos o bloco



// var é global e, também local, let e const no bloco é local
//console.log('>existe x antes do bloco?', x)
// {
//     let x = 23
//     console.log('tem x aqui dentro?',  x )
// }
//console.log('> existe x depois do bloco?', x)

// tudo que vem do bloco {} consegue ler a variavel, antes do bloco a var é intefinida
//------------------------------------------------------------------------------

//var nome = "Pepsi"
// typeof para ver o tipo da variavel
// console.log(typeof nome)

//let age, isHuman
//age = 23
//isHuman = true
// multiplos argumentos na função
//console.log(nome, age, isHuman)

// concatenando valores (somar string com var)
//console.log('O ' + nome, 'tem ' + age,'anos')
// interpolando valores com template literals or template strings, var dentro de ${}
//console.log(`O ${nome} tem ${age} anos`)
//------------------------------------------------------------------------------
//Objects e array
// const person = {
//     name: "Pepsi",
//     agr: 23,
//     weight: 93.6,
//     isAdmin:true
// }

// console.log(person)

// const animal = [
//     'Gato',
//     'Mamaco',
//     'Doguinho'
// ]
// console.log(animal[0])
//------------------------------------------------------------------------------
// var weight;
// console.log(typeof weight) //undefined

// let name = "Pepsi"
// let agr = 23
// let stars = 5.6
// let usSybscribed = true

let Pepsi = {
     name: "Pepsi",
     age: 23,
     weight: 93.5,
     isSubscribed: true,
}
// console.log(`${student.name} tem ${student.age} anos, ele pesa ${student.weight} 
// e a inscrição dele é ${student.isSubscribed}`)
const Lari = {
    name: "Lari",
    age: "23",
    weight: 87,
    isSubscribed: true,
}

let students = []
students = [
    Pepsi, Lari
]

console.log(students)
