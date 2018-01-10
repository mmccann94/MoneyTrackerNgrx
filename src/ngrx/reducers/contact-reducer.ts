import { ContactActions, ContactActionTypes } from "../actions/contact-actions";
import { Action } from "@ngrx/store";
import { MTAction } from "../mt-action";
import { assert } from "ionic-angular/util/util";

let nextId = 0;

export function ContactsReducer(state = [], action: MTAction) {
    switch (action.type) {
        case ContactActionTypes.AddContact:
            return [...state, Object.assign({}, action.payload, { id: nextId++ })];
        case ContactActionTypes.UpdateContact:
            return state.map(contact => {
                return contact.id === action.payload.id ? Object.assign({}, contact, action.payload) : contact;
            });
        case ContactActionTypes.RemoveContact:
            return state.filter(contact => contact.id !== action.payload.id);
    }
}