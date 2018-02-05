import { Contact } from "../../domain/contact";
import * as actions from "./contact.actions";
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector } from "@ngrx/store/src/selector";
import { ContactsState } from "./contact.state";

export const contactAdapter = createEntityAdapter<Contact>();

export interface ContactState extends EntityState<Contact> {
};

const defaultContact = {
  ids: ['1', '2'],
  entities: {
    '1': {
      id: '1',
      name: 'Marty',
      balance: 5
    }, 
    '2': {
      id: '2',
      name: 'Rianne',
      balance: -5
    }
  }

}

const initialState: ContactState = contactAdapter.getInitialState(defaultContact);

export const contactReducer = (state: ContactState = initialState, action: actions.ContactActions): ContactState => {
  switch (action.type) {
    case actions.CREATE:
      return contactAdapter.addOne(action.payload, state);
    case actions.UPDATE:
      return contactAdapter.updateOne({id: action.id, changes: action.changes}, state);
    case actions.DELETE:
      return contactAdapter.removeOne(action.id, state);
    case actions.LOAD:
      return state;
    default:
      return state;
  }
};

export const getContactState = createFeatureSelector<ContactState>('contact');

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = contactAdapter.getSelectors(getContactState);