import React from 'react'
import Title from '../Title'
import { shallow } from 'enzyme'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() })

const mock_handleClick = jest.fn();
const

describe('Title', () =>{
 let wrapper

   beforeEach(() =>{
    wrapper = shallow(<Title handleClick={mock_handleClick}/>
    )
   });
   it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should call updateSearch when search form is submitted', () => {
    wrapper.find('.array').simulate('click', { target: { value: 'array' } });
    expect(mock_handleClick).toBeCalled();
    // expect(mock_handleClick).toBeCalled();
  });


});