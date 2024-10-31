import { DioAccount } from "./DioAccount";


export class BonusAccount extends DioAccount{
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    private loan: number = 0
   deposit = (value:number): void => {
    if(this.validateStatus()){
        this.setBalance(value + 10)
        //this.balance += this.depositValue
        console.log('Você depositou R$' , value ,',00\nO novo saldo é: R$',  this.getBalance() +',00') 

      }
   }


}