import { CSSTransitionGroup } from 'react-transition-group'
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
  console.log('this.state.index', this.state.index)
  let showResult 
  if(event.target.value === this.props.topicChoice[this.state.index].correctAnswer) {
    localStorage.removeItem(this.props.topicChoice[this.state.index].id)
    showResult = 'Correct'
  } else {
    showResult = 'Incorrect'
    localStorage.setItem(this.props.topicChoice[this.state.index].id, JSON.stringify(this.props.topicChoice[this.state.index]))
    this.filterLocalStorage()
  }
  this.setState({ index: this.state.index +1, showResult: showResult }, () => setTimeout(() =>{
    this.setState( { showResult: ''})}, 2000 ))
  }
  
  filterLocalStorage () {
    console.log('yo')
    let removeDup = []

    if(removeDup.length > 0){
      console.log('34')
      for(let i = 0; i < localStorage.length; i++) {
        removeDup.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
      }
      removeDup.forEach((uniqueId, index) =>{
        console.log('uniqueid',uniqueId)
        if(uniqueId.id === this.props.topicChoice[this.state.index].id){
          removeDup.splice(index, 1)
        }
      })
      localStorage.clear()
      console.log('44')
      for(let i = 0; i < removeDup.length; i++){
        localStorage.setItem(removeDup[i].id, JSON.stringify(i))
      }
      console.log('48')
    }
console.log(removeDup)
}


componentDidUpdate = () =>{
  if(this.state.index + 1 === this.props.topicChoice.length){
    this.setState({ index: 0 })
  }
}
 
  render() {
      const { index } = this.state
      let { questions, answers, resource} = this.props.topicChoice[index]
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
 
