import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from "./App";

configure({adapter: new Adapter()});

describe('App', function () {
    const app = shallow(<App />);

    it('renders properly', () => {
        expect(app.debug()).toMatchSnapshot();
    });

    it('contains a connected Wallet componet', () =>{
        expect(app.find('Connect(Wallet)').exists()).toBe(true)
    })
});
