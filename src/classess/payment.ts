export class Payment{
    // readonly recipient:string
    // private details:string
    // public amount:number

    constructor(readonly recipient:string,private details:string,public amount:number) {
        // this.recipient = recipient;
        // this.details = details;
        // this.amount = amount;
    }

    format():string {
        return `${this.recipient} owes #${this.amount} for ${this.details}`
    }
// constructor(readonly client:string,
//     private details:string, public amount:number){}
}