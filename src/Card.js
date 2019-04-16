import React, { Component } from 'react'
import './Card.scss'
import QuestionTitle from './QuestionTitle'
import './images/jigsawjpeg.jpeg'

export default class Card extends Component {

 render() {
    let displayInfo
   if(this.props.topicChoice) {
    displayInfo = <QuestionTitle topicChoice={this.props.topicChoice}
         />
      } else {
          displayInfo = <article>
                        <h2>Would you like to play a game?</h2>
                        <h5>You have 30 seconds to test your knowledge on string and array prototypes</h5>
                        <p>Select a Prototype to Above to Begin</p>
                      </article> 
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