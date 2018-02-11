import * as fromContacts from './contact.reducer';
import * as fromTransactions from './transaction.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface ContactsState {
    contacts: fromContacts.State,
    transactions: fromTransactions.State;
  }
  
  export const reducers = {
      contacts: fromContacts.reducer,
      transactions: fromTransactions.reducer
  };

  /*
  CONTACTS
  */

  export const getContactsState = createFeatureSelector<ContactsState>('contacts');

  export const getContactEntitiesState = createSelector(
    getContactsState,
    state => state.contacts
  );

  export const getSelectedContactId = createSelector(
    getContactEntitiesState,
    fromContacts.getSelectedId
  );

  export const {
    selectIds: getContactIds,
    selectEntities: getContactEntities,
    selectAll: getAllContacts,
    selectTotal: getTotalContacts,
  } = fromContacts.adapter.getSelectors(getContactEntitiesState);

  export const getSelectedContact = createSelector(
    getContactEntities,
    getSelectedContactId,
    (entities, selectedId) => {
      return selectedId && entities[selectedId];
    }
  );

  /*
  TRANSACTIONS
  */

  export const getTransactionEntitiesState = createSelector(
    getContactsState,
    state => state.transactions
  );

  export const getSelectedTransactionId = createSelector(
    getTransactionEntitiesState,
    fromTransactions.getSelectedId
  );

  export const {
    selectIds: getTransactionIds,
    selectEntities: getTransactionEntities,
    selectAll: getAllTransactions,
    selectTotal: getTotalTransactions,
  } = fromTransactions.adapter.getSelectors(getTransactionEntitiesState);

  export const getSelectedTransaction = createSelector(
    getTransactionEntities,
    getSelectedTransactionId,
    (entities, selectedId) => {
      return selectedId && entities[selectedId];
    }
  );

  /*
  JOINS
  */

  export const getTransactionsForContact = createSelector(
    getSelectedContact,
    getTransactionEntities,
    (contact, transactions) => {
      return contact.transactions.map(id => transactions[id])
    }
  );