import balanceReducer from './balance';
import * as actions from '../actions/balance';

describe('balanceReducer', () => {
    it('sets a balance', () => {
        const balance = 10;

        // expect(balanceReducer(undefined, {type: constats.SET_BALANCE, balance}).toEqual(balance);
        expect(balanceReducer(undefined, actions.setBalance(balance))).toEqual(balance);
    });

    it('deposits into the balance', () => {
        const deposit = 10;
        const initialState = 5;

        expect(balanceReducer(initialState, actions.deposit(deposit))).toEqual(initialState + deposit)
    });
    it('withdraws from the balance', () => {
        const initialState = 30;
        const withDrawal = 10;

        expect(balanceReducer(initialState, actions.withDraw(withDrawal))).toEqual(initialState - withDrawal)
    })
});
