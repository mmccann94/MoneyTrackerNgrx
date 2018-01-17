import { Contact } from "../../domain/contact";
import { Action } from "@ngrx/store";

export enum ContactActionTypes {
    AddContact = '[Contact] Add',
    UpdateContact = '[Contact] Update',
    RemoveContact = '[Contact] Remove',
    LoadContact = '[Contact] Load',
}

export class AddContact implements Action {
    readonly type = ContactActionTypes.AddContact;
  
    constructor(public payload: Contact) {}
}

export class UpdateContact implements Action {
    readonly type = ContactActionTypes.UpdateContact;
  
    constructor(public payload: Contact) {}
}

export class RemoveContact implements Action {
    readonly type = ContactActionTypes.RemoveContact;
  
    constructor(public payload: Contact) {}
}

export class LoadContact implements Action {
    readonly type = ContactActionTypes.LoadContact;
  
    constructor(public payload: Contact) {}
}

export type ContactAction = AddContact | UpdateContact | RemoveContact | LoadContact;