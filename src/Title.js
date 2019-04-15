import React, { Component } from 'react'
import './Title.scss'

export default class Title extends Component {

  handleClick = (event) => {
   
    let studyOption = event.target.value;

    switch(studyOption) {
      case "Array Prototypes":
        this.props.selectTopic(studyOption);
        break
      case "String Prototypes":
        this.props.selectTopic(studyOption);
        break
      default: this.props.selectReview()
    }
  }

  render() {
   return (
    <section className="Title-btn-wrapper bounce">
         <button value="Array Prototypes" name="arrayEvent" onClick={this.handleClick}>Array Prototypes</button>
         <button value="review" onClick={this.handleClick}> Review Cards</button>
         <button value="String Prototypes" name="stringEvent" onClick={this.handleClick}>String Prototypes</button>
    </section> 
   )
  }
}