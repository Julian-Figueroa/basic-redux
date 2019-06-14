// Action
interface Action {
    type: string;
    payload?: any;
}

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

        default:
            return state;
    }
}

const incrementalAction: Action = {
    type: 'INCREMENTAL'
};

const decrementalAction: Action = {
    type: 'DECREMENTAL'
};

const multiplylAction: Action = {
    type: 'MULTIPLY',
    payload: 2
};

const dividelAction: Action = {
    type: 'DIVIDE',
    payload: 5
};

// Use
console.log(reducer(10, incrementalAction));

console.log(reducer(10, decrementalAction));

console.log(reducer(10, multiplylAction));

console.log(reducer(10, dividelAction));