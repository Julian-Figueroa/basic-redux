import { Action } from '../ngrx-fake/ngrx';

export function counterReducer(state: number = 10, action: Action) {
    switch (action.type) {
        case 'INCREMENTAL':
            return state += 1;

        case 'DECREMENTAL':
            return state -= 1;

        case 'MULTIPLY':
            return state * action.payload;

        case 'DIVIDE':
            return state / action.payload;

        case 'RESET':
            return state = action.payload;

        default:
            return state;
    }
}