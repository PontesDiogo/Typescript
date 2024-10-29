interface Pessoa {
    nome: string,
    idade: number,
    profissao?: string
}

const pessoa: Pessoa = {
    nome: 'Roberto',
    idade: 19
}

const outraPessoa: Pessoa = {
    nome: 'Rogério',
    idade: 20,
    profissao: 'Desenvolvedor Fullstack'

}

const arrayPessoa: Array<Pessoa> = [ //ou const arrayPessoa Array<Pessoa> = {}
    pessoa,
    outraPessoa
]

const arrayNum: number[] = [
    1,2,3
]

const arrayString: Array<string> = [
    '1','2','3'
]
