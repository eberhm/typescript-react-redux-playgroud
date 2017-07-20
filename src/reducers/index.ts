import { Action } from '../actions';
import { Store } from "../store/index";

const initialState = {
    value: 0
};

export const counterReducer = (state: Store.Counter, action: Action):Store.Counter => {
    switch (action.type) {
        case 'RESET_COUNTER':
            return initialState;
        case 'INCREMENT_COUNTER':
            return {
                value: state.value + action.delta
            };
        default:
            return initialState;
    }
};