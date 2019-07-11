import * as constats from '../actions/constants';

export default (previousState = 0, actions) => {
    switch (actions.type) {
        case constats.SET_BALANCE:
            return actions.balance;
        case constats.DEPOSIT:
            return previousState + actions.deposit;
        case constats.WITHDRAW:
            return previousState - actions.withDrawal;
        default:
            return previousState;
    }
}
