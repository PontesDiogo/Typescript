// const user = {
//     name: 'Diogo',
//     age: 19,
//     showName(){
//         console.log(this.name)
//     }
// }


class User {
    name : string = 'Igor'
    age: number = 20

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }

    showName = () => {
        console.log(this.name)
    }
}
const user = new User('Alberto',22)

const otherUser = new User('João', 20)
user.showName()
otherUser.showName()






