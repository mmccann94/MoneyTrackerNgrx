import { Action } from "@ngrx/store";
import { Contact } from "../../../model/contact";

export const CREATE = '[Contacts] Add'
export const LOAD = '[Contacts] Load'
export const UPDATE = '[Contacts] Update'
export const DELETE = '[Contacts] Delete'

export class Create implements Action {
    readonly type = CREATE;
    constructor(public payload: Contact) {}
}

export class Load implements Action {
    readonly type = LOAD;
    constructor(public id: string) {}
}

export class Update implements Action {
    readonly type = UPDATE;
    constructor(public id, public changes: Partial<Contact>) {}
}

export class Delete implements Action {
    readonly type = DELETE;
    constructor(public id: string) {}
}

export type ContactActions = Create | Load | Update | Delete;