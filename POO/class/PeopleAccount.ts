import { DioAccount } from "./DioAccount"

export class PeopleAccount extends DioAccount{
    private doc_id: number

    constructor(doc_id:number, name: string, AccountNumber: number){
        super(name,AccountNumber)
        this.doc_id = doc_id
        
    }

    getLoan = (value: number): void => {
        // this.loan = 1000.00
 
         this.setBalance(value) //////
         console.log('Você pegou um empréstimo de: R$' , value , ' O seu novo saldo é de: R$', this.getBalance(), ',00')
     }

    // getLoan = (value: number): void => {
    //     console.log('Você pegou um empréstimo de: R$' , value , ' O seu novo saldo é de: R$', this.getBalance(), ',00')
    // }
}