import { DioAccount } from "./DioAccount"

export class PeopleAccount extends DioAccount{
    doc_id: number

    constructor(doc_id:number, name: string, AccountNumber: number){
        super(name,AccountNumber)
        this.doc_id = doc_id
        
    }

    getLoan = () => {
        console.log('Você pegou um empréstimo')
    }
}