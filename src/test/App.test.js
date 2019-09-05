import React from 'react';
import App from '../App';
import { shallow } from "enzyme";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() })


const mockTopic = 'Array Prototypes'

const mockData = [{
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
  },
  {
  id: "2932-wo-mivt9-o59dks",
  category: "String Prototypes",
  questions: "What method splits a String object into an array of strings by separating the string into substring ?",
  answers: [
  ".concat",
  ".split",
  ".substring"
  ],
  correctAnswer: ".split",
  correct: false,
  resource: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split"
  }]

describe('App', () => {
  let wrapper;

  beforeEach(() => {
   wrapper = shallow(<App />
   )
  });

  it('should match the snapshot with all data passed in', () =>{
   expect(wrapper).toMatchSnapshot()
  })

  it('should have default properties', () =>{
    expect(wrapper.state().prototypes).toEqual([])
    expect(wrapper.state().topicChoice).toEqual(null)
    expect(wrapper.state().studyCards).toEqual([])
    expect(wrapper.state().review).toEqual(false)
  })
  
  describe('App state to update state when functions are invoked', () =>{
    
    it('App updates review state when select review is invoked', () => {
      let previousState = {
        prototypes: [],
        topicChoice: null,
        studyCards: [],
        review: false,
        localStorage: 0,
      }
      expect(wrapper.state()).toEqual(previousState)
      wrapper.instance().selectReview(true)
      expect(wrapper.state()).toEqual({
        prototypes: [],
        topicChoice: null,
        studyCards: [],
        review: true,
        localStorage: 0,
      })

    });
    it('App\'s selectTopic method should filter data', () => {
      const mockResult = [{
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
        }]
      wrapper.state().prototypes = mockData;
      wrapper.instance().selectTopic(mockTopic);
      expect(wrapper.state().topicChoice).toEqual(mockResult)
    })
    xit('Should update state when invoked with array of objects', () => {
      wrapper.setState({ topicChoice : mockData})
      wrapper.instance().selectTopic(mockTopic)
      expect(wrapper.state().topicChoic).toEqual([mockResult])

    })

})
})