// import {hasFormatter} from "../interface/hasFormatter.js"

export class Invoice {
        readonly client:string
        private details:string
        public amount:number

        constructor(client:string, details:string,amount:number) {
            this.client = client;
            this.details = details;
            this.amount = amount;
        }

        format():string {
            return `${this.client} owes #${this.amount} for ${this.details}`
        }
    // constructor(readonly client:string,
    //     private details:string, public amount:number){}
}