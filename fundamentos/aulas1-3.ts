/* const soma = (a:number, b: number) => {
    console.log(a+b)
}

soma(1,2) 
aula 1
*/ 

//declaração de variáveis

var a = 'a' //escopo global- em qlqr lugar do script ela pode ser alterada
let b: string = 'b' //ao longo do script pode ter seu valor alterado
const c = 'c' //não muda durante o código ( nao pode ser sobrescrita )

//deixar explicito oq a variável vai receber

let n: number = 2

let m: string|number = 2 //variavel é inicializada como numer 2, mas pode ser string
m = 'Diogo'

let p: any =2 
p = 'Diogo'
p = false
