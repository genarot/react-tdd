import React from 'react';
import {configure, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Loot} from "./Loot";

configure({adapter: new Adapter()});

describe('Loot', function () {
    let props = {balance: 10, bitcoin: {}};
    let loot = shallow(<Loot {...props}/>);

    it('renders properly', () => {
        expect(loot.debug()).toMatchSnapshot();
    });

    describe('when mounted', () => {
        const mockFetchBitcoin = jest.fn();
        beforeEach(() => {
            props.fetchBitCoin = mockFetchBitcoin;
            loot = mount(<Loot {...props}/>);
        });
        it('dispatches the "fetchBitcoin()" method ir receives from props ', function () {
            expect(mockFetchBitcoin).toHaveBeenCalled();
        });
    });

    describe('when there are valid bitcoin props', function () {
        beforeEach(() => {
            props = {balance: 10, bitcoin: {bpi: {USD: {rate: '1000'}}}};
            loot = shallow(<Loot {...props}/>);
        });
        it('display the correct bitcoin value', () => {
            expect(loot.find('h3').text()).toEqual('Bitcoin balance: 0.01')
        });
    });
});
