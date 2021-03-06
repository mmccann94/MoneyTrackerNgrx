export class Contact {

    id: string;
    name: string;
    balance: number;
    transactions: string[];

    constructor(id: string, name: string, balance: number, transactions: string[]){
        this.id = id;
        this.name = name;
        this.balance = balance;
        this.transactions = transactions;
    }

    public getAbsoluteBalance(): number {
        return Math.abs(this.balance);
    }

    public owesMoney(): boolean {
        return this.balance < 0 ? true : false;
    }

    public owedMoney(): boolean {
        return this.balance > 0 ? true : false;
    }
 }