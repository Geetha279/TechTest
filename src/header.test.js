import React from 'react'
import Header from './header'
import {shallow,configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


it('renders without crashing', () => {
    shallow(<Header />);
  });