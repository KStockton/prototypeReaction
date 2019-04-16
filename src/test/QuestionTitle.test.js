import React from 'react';
import QuestionTitle from '../QuestionTitle';
import { shallow } from "enzyme";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() })



const mockTopicChoice = [
  {
   id: "2932-tq-iwpjt-0oodks",
   category: "Array Prototypes",
   questions: "What does .unshift do to an array ?",
   answers: [
   "adds items to the beginning",
   "removes items from beginning",
   "adds items to the end"
   ],
   correctAnswer: "adds items to the beginning",
   correct: false,
   resource: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift"
  },
  {
   id: "2932-f5-o4cm9-lcfdks",
   category: "Array Prototypes",
   questions: "What array prototype checks if an array has a certain value and returns true or false ?",
   answers: [
   ".findIndex",
   ".lastIndexOf",
   ".includes"
   ],
   correctAnswer: ".includes",
   correct: false,
   resource: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes"
  }
]



describe('QuestionTitle', () =>{
  let wrapper;

  beforeEach(() =>{
   wrapper = shallow(<QuestionTitle topicChoice={mockTopicChoice}/>
   )
  })
  it('should match the snapshot with all data passed in', () =>{
   expect(wrapper).toMatchSnapshot()
  })
  it('QuestionTitle state should have default properties', () =>{
   expect(wrapper.state().index).toEqual(0)
   expect(wrapper.state().showResult).toEqual('')
  })
  it('When the selection is correct it should display "correct" ', () => {
   wrapper.find('.answer-wrapper').childAt(0).simulate('click', { target: { value: "adds items to the beginning"}})
   expect(wrapper.state().showResult).toEqual("Correct")
   setTimeout(() => {expect(wrapper.state().showResult).toEqual('')}, 1000)
  })
  it('When the selection is incorrect it should display "incorrect', () =>{
   wrapper.find('.answer-wrapper').childAt(1).simulate('click', { target: { value: "adds items to the end"}})
   expect(wrapper.state().showResult).toEqual("Incorrect")
   setTimeout(() => {expect(wrapper.state().showResult).toEqual('')}, 1000)
  })


  

})

