import { createEntityAdapter, EntityState } from "@ngrx/entity";
import * as moment from 'moment';
import * as actions from "../actions/transaction.actions";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Transaction } from "../../../model/transaction";

export const adapter = createEntityAdapter<Transaction>({
  selectId: (transaction: Transaction) => transaction.id
});

export interface State extends EntityState<Transaction> {
  selectedTransactionId: string | null;
};

const defaultTransactions: State = {
    ids: ['1', '2'],
    entities: {
      '1': {
        id: '1',
        amount: 10,
        timestamp: moment().toDate().getTime()
      }, 
      '2': {
        id: '2',
        amount: -5,
        timestamp: moment().toDate().getTime()
      }
    },
  selectedTransactionId: null
  }

const initialState: State = adapter.getInitialState(defaultTransactions);

export const reducer = (state: State = initialState, action: actions.TransactionActions): State => {
    switch (action.type) {
      case actions.CREATE:
        return adapter.addOne(action.payload, state);
      case actions.UPDATE:
        return adapter.updateOne({id: action.id, changes: action.changes}, state);
      case actions.DELETE:
        return adapter.removeOne(action.id, state);
      case actions.LOAD:
        return state;
      default:
        return state;
    }
  };

  export const selectedId = (state: State) => state.selectedTransactionId;

  export const getTransactionState = createFeatureSelector<State>('transaction');
  
  export const getSelectedId = createSelector(
    getTransactionState,
    selectedId
  );