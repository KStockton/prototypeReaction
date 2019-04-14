import React, { Component } from 'react' 
import './QuestionTitle.scss'

export default class QuestionTitle extends Component{
  constructor(props){
    super(props)

  this.state = {
    index: 0
    }
  }


checkSelection = (event) => {
  this.setState({index: this.state.index + 1 })
  if(event.target.value === this.props.topicChoice[this.state.index].correctAnswer) {
    console.log('cheers')
  } else {
    console.log('incorrect')
    localStorage.setItem(this.state.index, JSON.stringify(this.props.topicChoice[this.state.index]))
  }
}



  render() {
    
  console.log(this.state)
      const { index } = this.state
      let { questions, answers, resource} = this.props.topicChoice[index]
      
  return(
    <article >
    <h4>{questions}</h4>
    <h5>Select Your Answer</h5>
    <section className="answer-wrapper">
      { answers.map((answer, index) =>{
        return <button key={index} value={answer} onClick={this.checkSelection}>{answer}</button>
      })
      }
    </section>
      <a href={resource}>Resource</a>
  </article>
 )
}
}
 
