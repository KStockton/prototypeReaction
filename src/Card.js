import React, { Component } from 'react'
import './Card.css'
import QuestionTitle from './QuestionTitle'

export default class Card extends Component {
 constructor(props) {
  super(props)

  this.state = {
   title: ''
  }
 }


 render(){
    // const { id, category, questions, answers, resource, correctAnswer} = this.props.
    let displayInfo
   if(this.props.topicChoice) {
    displayInfo = this.props.topicChoice.map(choice => {
       return (
         <QuestionTitle questions={choice.questions}
         key={choice.id}
         answers={choice.answers}
         correctAnswer={choice.correctAnswer}
         resource={choice.resource}
         category={choice.category}
         />
         )
        })
      } else {
        displayInfo = <h4>Loading...</h4> 
      }
  return (
   <div className="Card-wrapper">
   <section className="title-wrapper">
    {displayInfo}
   </section>
   </div>
  )
 }
}