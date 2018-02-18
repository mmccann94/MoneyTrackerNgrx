import { Transaction } from "../model/transaction";
import { Contact } from "../model/contact";
import { UUID } from 'angular2-uuid';

export class ContactBuilder {

    private id: string;
    private name: string;
    private balance: number;
    private transactions: string[];

    constructor() {
        this.id = UUID.UUID();
        this.balance = 0;
        this.transactions = [];
    }

    setName(name: string): ContactBuilder {
        this.name = name;
        return this;
    }

    setBalance(balance: number): ContactBuilder {
        this.balance = balance;
        return this;
    }

    setTransactions(transactions: string[]): ContactBuilder {
        this.transactions = transactions;
        return this;
    }

    build(): Contact {
        return {id: this.id, name: this.name, balance: this.balance, transactions: this.transactions};
    }

}