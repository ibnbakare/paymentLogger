export class Payment {
    // readonly recipient:string
    // private details:string
    // public amount:number
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
        // this.recipient = recipient;
        // this.details = details;
        // this.amount = amount;
    }
    format() {
        return `${this.recipient} owes #${this.amount} for ${this.details}`;
    }
}
