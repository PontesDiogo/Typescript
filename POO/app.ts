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
import { BonusAccount } from './class/BonusAccount'


// const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Diogo',10)
// console.log(peopleAccount.getName)
// peopleAccount.deposit()

const companyAccount: CompanyAccount = new CompanyAccount('Faz site Inc', 22)
const bonusAccount: BonusAccount = new BonusAccount('Maurilio',33)
const peopleAccount: PeopleAccount = new PeopleAccount (44, 'Pedro', 10)



console.log(companyAccount.getName())
console.log(companyAccount.getBalance())
console.log(companyAccount.deposit(800))
console.log(companyAccount.withdraw(20))
console.log(companyAccount.getLoan(1000))

console.log('\n-------------------')

console.log(bonusAccount.getName())
console.log(bonusAccount.getBalance())
console.log(bonusAccount.deposit(200))
console.log(bonusAccount.withdraw(500))

console.log('\n-------------------')

console.log(peopleAccount.getName())
console.log(peopleAccount.getBalance())
console.log(peopleAccount.deposit(800))
console.log(peopleAccount.withdraw(20))
console.log(peopleAccount.getLoan(1000))






