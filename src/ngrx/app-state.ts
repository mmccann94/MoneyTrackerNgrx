import { Contact } from "../models/contact";
import { Transaction } from "../models/transaction";

export interface AppState {
    contacts: Contact[];
    transactions: Transaction[];
}