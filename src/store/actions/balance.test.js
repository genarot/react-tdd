import * as constants from './constants';
import * as actions from './balance';

describe('Balance', () => {
    it('creates an action to set the balance', () => {
        const balance = 0;

        const expectedAction  = {type: constants.SET_BALANCE, balance};

        expect(actions.setBalance(balance)).toEqual(expectedAction);
    });

    it('creates an action to deposit into the balance', function () {
        const deposit = 10;

        const expectedAction = {type: constants.DEPOSIT, deposit};

        expect(actions.deposit(deposit)).toEqual(expectedAction);
    });
    it ('creates an action to withdraw from the balance', () => {
        const withDrawal = 10;

        const expectAction = {type: constants.WITHDRAW, withDrawal };

        expect(actions.withDraw(withDrawal)).toEqual(expectAction);
    })
})
