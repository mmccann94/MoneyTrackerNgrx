import { Contact } from "../../domain/contact";
import { ContactAction, ContactActionTypes } from "./contact.actions";

export interface ContactState {
    contacts: Contact[];
  }

  const initialState: ContactState = {contacts: [{id: 1, name: 'Marty', balance: 25}, {id: 2, name: 'Rianne', balance: -30}]};

  export const reducer  = (state: ContactState = initialState, action: ContactAction): ContactState => {
    switch (action.type) {
      case ContactActionTypes.AddContact:
        return {
            ...state, 
            contacts:[...state.contacts, action.payload]
        };
      case ContactActionTypes.UpdateContact:
        return {
            ...state,
            contacts: state.contacts.map(contact => contact.id === action.payload.id ? Object.assign({}, contact, action.payload) : contact)
        };
      case ContactActionTypes.RemoveContact:
        return {
            ...state,
            contacts: state.contacts.filter(contact => contact.id === action.payload.id)
        }
      case ContactActionTypes.LoadContact:
        return;
      default:
        return state;
    }
  };