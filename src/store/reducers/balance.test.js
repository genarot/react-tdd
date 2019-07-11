import balanceReducer from './balance';
import * as constats from '../actions/constants';
import * as actions from '../actions/balance';

describe('balanceReducer', () => {
    it('sets a balance', () => {
        const balance = 10;

        // expect(balanceReducer(undefined, {type: constats.SET_BALANCE, balance}).toEqual(balance);
        expect(balanceReducer(undefined, actions.setBalance(balance))).toEqual(balance);
    })
})
