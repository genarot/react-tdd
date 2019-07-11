import * as constats from '../actions/constants';
import {read_cookie, bake_cookie } from 'sfcookies';

const BALANCE_COOKIE = 'BALANCE_COOKIE';

export default (previousState = 0, actions) => {
    let balance ;
    switch (actions.type) {
        case constats.SET_BALANCE:
            balance = actions.balance;
            break;
        case constats.DEPOSIT:
            balance =  previousState + actions.deposit;
            break;
        case constats.WITHDRAW:
            balance = previousState - actions.withDrawal;
            break;
        default:
            balance = +(read_cookie(BALANCE_COOKIE)||previousState);
            break;
    }
    bake_cookie(BALANCE_COOKIE, balance);
    return balance;
}
