import { Contact } from "./contact";

export interface Transaction {
    contact: Contact;
    amount: number;
    timestamp: number;
}