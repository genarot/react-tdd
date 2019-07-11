import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Wallet} from "./Wallet";

configure({adapter: new Adapter()});

describe('Wallet', () => {
    const props = {balance: 20};
    const wallet = shallow(<Wallet {...props}/>);

    it('renders properly', () => {
        expect(wallet.debug()).toMatchSnapshot();
    });
    it('displays the balance from props', () => {
        expect(wallet.find('.balance').text()).toEqual('Wallet balance 20.')
    })
});
