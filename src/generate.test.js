import React from 'react';
import { shallow, configure } from 'enzyme';
import { Generate } from './generate';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Generate component', () => {
    it('check div', () => {
        const wrapper = shallow(<Generate />);
        expect(wrapper).toMatchSnapshot();
    });
});




