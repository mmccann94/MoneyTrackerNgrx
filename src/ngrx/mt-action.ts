import { Action } from "@ngrx/store/src/models";

export interface MTAction extends Action {
    type: string;
    payload?: any;
}