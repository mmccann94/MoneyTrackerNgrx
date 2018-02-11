import * as actions from "../actions/contact.actions";
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Contact } from "../../../model/contact";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const adapter = createEntityAdapter<Contact>({
  selectId: (contact: Contact) => contact.id
});

export interface State extends EntityState<Contact> {
  selectedContactId: string | null;
};

const initialState: State = adapter.getInitialState({
  selectedContactId: null,
  ids: ['1', '2'],
  entities: {
    '1': {
      id: '1',
      name: 'Marty',
      balance: 5,
      transactions: ['1', '2']
    },
    '2': {
      id: '2',
      name: 'Rianne',
      balance: 10,
      transactions: []
    }
  }
});

export const reducer = (state: State = initialState, action: actions.ContactActions): State => {
  switch (action.type) {
    case actions.CREATE:
      return adapter.addOne(action.payload, state);
    case actions.UPDATE:
      return adapter.updateOne({id: action.id, changes: action.changes}, state);
    case actions.DELETE:
      return adapter.removeOne(action.id, state);
    case actions.LOAD:
    return {
      ...state,
      selectedContactId: action.id
    }
    default:
      return state;
  }
};

export const getSelectedId = (state: State) => state.selectedContactId;

export const getContactState = createFeatureSelector<State>('contact');