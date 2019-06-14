import { Store, createStore } from 'redux';
import { counterReducer } from './counter/counter.reducer';
import { incrementalAction } from './counter/counter.actions';

const store: Store = createStore(counterReducer);

store.subscribe(() => {
    console.log('Notifications: ', store.getState());
});

store.dispatch(incrementalAction);
store.dispatch(incrementalAction);
store.dispatch(incrementalAction);