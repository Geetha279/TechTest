import React from 'react';
import { shallow, configure } from 'enzyme';
import { Display } from './display';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Generate component', () => {
    it('check div', () => {
        const props = {
            pin: [{
                id: "sai",
                value: [1221, 3476, 5690, 2710, 2435]
            }, {
                id: "pratap",
                value: [1223, 3478, 5650, 2760, 2835]
            }, {
                id: "reddy",
                value: [1261, 4476, 7690, 2810, 1435]
            },
            ]
        }
        const wrapper = shallow(<Display {...props} />);
        expect(wrapper).toMatchSnapshot();
    });

});




