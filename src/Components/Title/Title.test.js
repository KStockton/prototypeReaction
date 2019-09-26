import React from 'react'
import Title from './Title'
import { shallow } from 'enzyme'

const mock_selectTopic = jest.fn();
const mock_selectReview = jest.fn();


describe('Title', () =>{
 let wrapper;

   beforeEach(() =>{
    wrapper = shallow(<Title 
      selectTopic={mock_selectTopic}
      selectReview={mock_selectReview} />
      )
    });

    it('should match the snapshot with all the data passed in', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should call selectTopic when array button is clicked', () => {
      wrapper.find('.Title-btn-wrapper').childAt(0).simulate('click', { target: { value: 'Array Prototypes' } });
      expect(mock_selectTopic).toBeCalled();
    });

    it('should call selectReview when review button  is clicked', () => {
      wrapper.find('.Title-btn-wrapper').childAt(1).simulate('click', { target: { value: 'review' } });
      expect(mock_selectReview).toBeCalled();
    });

    it('should call selectTopic when review button is clicked', () => {
      wrapper.find('.Title-btn-wrapper').childAt(2).simulate('click', { target: { value: 'String Prototypes'} });
      expect(mock_selectReview).toBeCalled();
    });

    it('should render three buttons for the first question', () =>{
      const btnCount = wrapper.find('button');
      expect(btnCount.length).toEqual(3);
    });

});