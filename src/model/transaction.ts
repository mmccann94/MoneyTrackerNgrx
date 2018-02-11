import { Contact } from "./contact";

export interface Transaction {
    id: string;
    amount: number;
    timestamp: number;
}