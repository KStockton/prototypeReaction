import React, { Component } from 'react' 
import './_QuestionTitle.scss'
export default class QuestionTitle extends Component{
  constructor(props){
    super(props)

  this.state = {
    index: 0,
    showResult: ''
    }
  }


checkSelection = (event) => {
  let showResult 
  if(event.target.value === this.props.topicChoice[this.state.index].correctAnswer) {
    localStorage.removeItem(this.state.index)
      showResult = 'Correct'
  } else {
    showResult = 'Incorrect'
    localStorage.setItem(this.state.index, JSON.stringify(this.props.topicChoice[this.state.index]))
  }
  this.setState({ index: this.state.index +1, showResult: showResult }, () => setTimeout(() =>{
    this.setState( { showResult: ''})}, 1000 ))
}

componentDidUpdate = () =>{
  if(this.state.index + 1 === this.props.topicChoice.length){
    this.setState({ index: 0 })
  }
}
 
  render() {
      const { index } = this.state
      let { questions, answers, resource} = this.props.topicChoice[index]
      // console.log('showResult:', this.state.showResult)
  return (
    <article >
      <h2>{questions}</h2>
        <section className="answer-wrapper">
          { answers.map((answer, index) =>{
           return <button key={index} value={answer} onClick={this.checkSelection}>
                   {answer}
                  </button>
            })
          }
        </section>
        <p className="show-result">{this.state.showResult}</p>
      <a href={resource}>Resource</a>
    </article>
 )
}
}
 
