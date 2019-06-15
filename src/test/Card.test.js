import React from 'react';
import Card from '../Card';
import { shallow } from "enzyme";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() })

const mocktopicChoice = [
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
  describe('Card renders correctly when props are passed in', () =>{
    
    it('Card renders differently when props are passed in', () => {
      const wrapper = shallow(<Card topicChoice={mocktopicChoice} />)
      expect(wrapper).toMatchSnapshot();
    });

    it('Should render one QuestionTitle when props are true', () =>{
      const wrapper = shallow(<Card topicChoice={mocktopicChoice} />)
      const questionComponent = wrapper.find('QuestionTitle')
      expect(questionComponent.length).toEqual(1)
    })
  })
