import balanceReducer from './balance';
import balanceReducer2 from './balance';
import * as actions from '../actions/balance';

describe('balanceReducer', () => {
    describe('when initializing', () => {
        const balance =10;

        it('sets a balance', () => {
            const balance = 10;

            // expect(balanceReducer(undefined, {type: constats.SET_BALANCE, balance}).toEqual(balance);
            expect(balanceReducer(undefined, actions.setBalance(balance))).toEqual(balance);
        });

        describe('then re-initializing', () => {
            it('reads the balance from cookies', () => {
                expect(balanceReducer2(undefined, {})).toEqual(balance)
            })
        });
    })
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
