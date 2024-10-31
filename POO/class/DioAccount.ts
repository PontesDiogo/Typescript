

export abstract class DioAccount{
    private name: string
    private readonly accountNumber: number
    private balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    
   private depositValue: number = 0
   private withdrawValue: number =0

    deposit = (value: number): void => {
        if(this.validateStatus()){
          this.setBalance(value)
          //this.balance += this.depositValue
          console.log('Você depositou R$' , value ,',00\nO novo saldo é: R$',  this.balance +',00') 

        }
        
    }
    withdraw = (value:number): void => {
        if(this.validateStatus()){
         this.setBalance(value * (-1))
         //this.balance -= this.withdrawValue
         console.log('Você sacou R$' + value +',00\nO novo saldo é: R$' + this.balance + ',00')
    
        }
    }
    getBalance = (): number => {
        
        return (this.balance)
    }

    setBalance =(value: number): void =>{
      
        this.balance += value
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