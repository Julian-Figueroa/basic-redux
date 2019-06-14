import { Action } from './ngrx-fake/ngrx';
import { incrementalAction, decrementalAction, multiplylAction, dividelAction, resetAction } from './counter/counter.actions';

function reducer(state: number = 10, action: Action) {
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

console.log(reducer(10, incrementalAction));
console.log(reducer(10, decrementalAction));
console.log(reducer(10, multiplylAction));
console.log(reducer(10, dividelAction));
console.log(reducer(0, resetAction));