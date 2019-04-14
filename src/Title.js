import React, { Component } from 'react'
import './Title.scss'

export default class Title extends Component {

  handleClick = (event) => {
    if(event.target.value === 'Array Prototypes'){
      //event.target.value vs 'Array/string Prototypes' *************
      this.props.selectTopic('Array Prototypes')
    } else if(event.target.value === 'String Prototypes') {
      this.props.selectTopic('String Prototypes')
    } else {
      this.props.selectReview()
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