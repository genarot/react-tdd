import * as constats from '../actions/constants';

export default (previousState = 0, actions) => {
    switch (actions.type) {
        case constats.SET_BALANCE:
            return actions.balance;
        default:
            return previousState;
    }
}
