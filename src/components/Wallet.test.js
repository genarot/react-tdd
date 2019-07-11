import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Wallet} from "./Wallet";

configure({adapter: new Adapter()});

describe('Wallet', () => {
    const mockDeposit = jest.fn();
    const mockWithDraw = jest.fn();
    const props = {balance: 20, deposit: mockDeposit, withDraw: mockWithDraw};
    const wallet = shallow(<Wallet {...props}/>);

    it('renders properly', () => {
        expect(wallet.debug()).toMatchSnapshot();
    });
    it('displays the balance from props', () => {
        expect(wallet.find('.balance').text()).toEqual('Wallet balance 20.')
    });

    it('creates an input to deposit into or withdraw from the balance', () => {
        expect(wallet.find('.input-wallet').exists()).toBe(true)
    });

    describe('when the user types into the wallet input', () => {
        const userBalance = '25';

        beforeEach(() => {
            wallet.find('.input-wallet')
                .simulate('change', {target: {value: userBalance}});
        });

        it('update the local wallet balance in the "state" and converts t to a number', () => {
            expect(wallet.state().balance).toBe(+userBalance);
        });

        describe('and the user wants to make a deposit', function () {
            beforeEach(() => wallet.find('.btn-deposit').simulate('click'));

            it('dispatches the "deposit()" it receives from props with the local balance', () => {
                expect(mockDeposit).toHaveBeenCalledWith(parseInt(userBalance, 10))
            })
        });

        describe('and the user wants to make a withdrawal', function () {
            beforeEach(() => wallet.find('.btn-withdraw').simulate('click'));

            it('dispatches the "withDraw()" it receives from props the local balance', () => {
                expect(mockWithDraw).toHaveBeenCalledWith(parseInt(userBalance, 10))
            })
        });
    })
});
