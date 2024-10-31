// const user = {
//     name: 'Diogo',
//     age: 19,
//     showName(){
//         console.log(this.name)
//     }
// }


// class User {
//     name : string = 'Igor'
//     age: number = 20

//     constructor(name: string, age: number){
//         this.name = name
//         this.age = age
//     }

//     showName = () => {
//         console.log(this.name)
//     }
// }
// const user = new User('Alberto',22)

// const otherUser = new User('João', 20)
// user.showName()
// otherUser.showName()

// Aplicação de banco
// Name, accountNumber
import { DioAccount } from './class/DioAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'


const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Diogo',10)
console.log(peopleAccount.getName)
peopleAccount.deposit()

const companyAccount: CompanyAccount = new CompanyAccount('Faz site Inc', 22)
companyAccount.deposit()
console.log(companyAccount)

