import { Contact } from "../../models/contact";
import { Injectable } from "@angular/core";
import {Action} from '@ngrx/store';
import { MTAction } from "../mt-action";

export enum ContactActionTypes {
    AddContact = '[Contact] Add',
    UpdateContact = '[Contact] Update',
    RemoveContact = '[Contact] Remove',
    LoadContact = '[Contact] Load',
}

export class Add implements MTAction {
    readonly type = ContactActionTypes.AddContact;
  
    constructor(public payload: Contact) {}
}

export class Update implements MTAction {
    readonly type = ContactActionTypes.UpdateContact;
  
    constructor(public payload: Contact) {}
}

export class Remove implements MTAction {
    readonly type = ContactActionTypes.RemoveContact;
  
    constructor(public payload: Contact) {}
}

export class Load implements MTAction {
    readonly type = ContactActionTypes.LoadContact;
  
    constructor(public payload: Contact) {}
}

export type ContactActions = Add | Update | Remove | Load;