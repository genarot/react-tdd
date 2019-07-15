import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from "./App";

configure({adapter: new Adapter()});

describe('App', function () {
    const app = shallow(<App/>);

    it('renders properly', () => {
        expect(app.debug()).toMatchSnapshot();
    });

    it('contains a connected Wallet componet', () => {
        expect(app.find('Connect(Wallet)').exists()).toBe(true)
    });

    it('contains a connected Loot componet', () => {
        expect(app.find('Connect(Loot)').exists()).toBe(true)
    });

    it('contains a link to the coindesk price page', () => {
        expect(app.find('a').props().href).toEqual('https://coindesk.com')
    });
});
