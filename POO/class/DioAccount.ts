

export abstract class DioAccount{
    private name: string
    private readonly accountNumber: number
    private balance: number = 0
    private status: boolean = true

    constructor(name: string, accounNumber: number){
        this.name = name
        this.accountNumber = accounNumber
    }


   

    deposit = (): void => {
        if(this.validateStatus()){
          console.log('Você depositou')  
        }
        
    }
    withdraw = (): void => {
        console.log('Você sacou')
    }
    getBalance = (): void => {
        console.log(this.balance)
    }

   setName = (name: string) => {
    this.name = name
    console.log('Nome alterado com sucesso!')
   }
   getName = (): string =>{
    return this.name;
   }

   validateStatus = (): boolean =>{
    if(this.status = true){
        return this.status
    }

    throw new Error('Conta inválida')
   }

}