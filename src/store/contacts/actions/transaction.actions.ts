import { Action } from "@ngrx/store";
import { Transaction } from "../../../model/transaction";

export const CREATE = '[Transactions] Add'
export const LOAD = '[Transactions] Load'
export const UPDATE = '[Transactions] Update'
export const DELETE = '[Transactions] Delete'

export class Create implements Action {
    readonly type = CREATE;
    constructor(public payload: Transaction) {}
}

export class Load implements Action {
    readonly type = LOAD;
    constructor(public id: string) {}
}

export class Update implements Action {
    readonly type = UPDATE;
    constructor(public id, public changes: Partial<Transaction>) {}
}

export class Delete implements Action {
    readonly type = DELETE;
    constructor(public id: string) {}
}

export type TransactionActions = Create | Load | Update | Delete;