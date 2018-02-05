import { ActionReducerMap } from '@ngrx/store';
import { contactReducer } from '../contact/contact.reducer';

export const reducers: ActionReducerMap<any> = {
    contact: contactReducer
};