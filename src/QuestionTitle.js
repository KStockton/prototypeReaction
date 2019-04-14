import React, { Component } from 'react' 
import './QuestionTitle.scss'

export default class QuestionTitle extends Component{
  constructor(props){
    super(props)

  this.state = {
    index: 0
    }
  }


checkAnswer = (event) => {
  if(event.target.value === this.props.topicChoice[this.state.index].correctAnswer) {
    console.log('cheers')
  } else {
    localStorage.setItem()
  }
}


  render() {

      const { index } = this.state
      let { questions, answers, resource} = this.props.topicChoice[index]
      
  return(
    <article >
    <h4>{questions}</h4>
    <h5>Select Your Answer</h5>
    <section className="answer-wrapper">
      { answers.map((answer, index) =>{
        return <button key={index} value={answer} onClick={this.checkAnswer}>{answer}</button>
      })
      }
    </section>
      <a href={resource}>Resource</a>
  </article>
 )
}
}
 
