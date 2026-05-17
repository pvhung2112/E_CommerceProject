export class priceObj{
    private readonly amount : number;
    private readonly currency : string;
    constructor(amount : number, currency : string){
        this.amount = amount;
        this.currency = currency;
    }
    getAmount() : number{
        return this.amount;
    }
    getCurrency() : string{
        return this.currency;
    }

}