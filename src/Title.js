import React, { Component } from 'react'
import './Title.scss'

export default class Title extends Component {

  handleClick = (event) => {
    if(event.target.value === 'Array Prototypes'){
      this.props.selectTopic('Array Prototypes')
    } else {
      this.props.selectTopic('String Prototypes')
    }
  }

  render() {
   return (
    <section className="Title-btn-wrapper bounce">
         <button value="Array Prototypes" name="arrayEvent" onClick={this.handleClick}>Array Prototypes</button>
         <button value="String Prototypes" name="stringEvent" onClick={this.handleClick}>String Prototypes</button>
    </section> 
   )
  }
}