import React, { Component } from 'react'
import './_Card.scss'
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
                           <h2>Knowledge Is Power. Let's Begin!</h2>
                           <p>Test your knowledge on string and array prototypes.</p>
                           <p>Select Option Above to Begin</p>
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