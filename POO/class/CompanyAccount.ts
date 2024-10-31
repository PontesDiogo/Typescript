import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount{
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
        
    }

    
    getLoan = (value: number): void => {
       // this.loan = 1000.00

        this.setBalance(value) //////
        console.log('Você pegou um empréstimo de: R$' , value , ' O seu novo saldo é de: R$', this.getBalance(), ',00')
    }

}