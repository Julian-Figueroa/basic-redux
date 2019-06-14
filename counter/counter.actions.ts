import { Action } from '../ngrx-fake/ngrx';

export const incrementalAction: Action = {
    type: 'INCREMENTAL'
};

export const decrementalAction: Action = {
    type: 'DECREMENTAL'
};

export const multiplylAction: Action = {
    type: 'MULTIPLY',
    payload: 2
};

export const dividelAction: Action = {
    type: 'DIVIDE',
    payload: 5
};

export const resetAction: Action = {
    type: 'RESET',
    payload: 0
};