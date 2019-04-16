import React from 'react';
import Card from '../Card';
import { shallow } from "enzyme";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() })

describe('Card', () => {
  let wrapper;

  beforeEach(() => {
   wrapper = shallow(<Card />
   )
  });

  it('should match the snapshot with all data passed in', () =>{
   expect(wrapper).toMatchSnapshot()
  })

})