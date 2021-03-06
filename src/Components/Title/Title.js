import React, { Component } from 'react';
// import './_Title.scss'

export default class Title extends Component {

  handleClick = (event) => {
   
    let studyOption = event.target.value;

    switch (studyOption) {
    case "Array Prototypes":
      this.props.selectTopic(studyOption);
      break;
    case "String Prototypes":
      this.props.selectTopic(studyOption);
      break;
    default: this.props.selectReview();
    }
  }

  render() {

    let reviewBtn;
    if (this.props.studyCards) {
      reviewBtn = <button value="review" onClick={this.handleClick}>Study First</button>;
    } else {
      reviewBtn = <button value="review" onClick={this.handleClick}> Review Cards {localStorage.length}</button>;
    
    }
    return (
      <section className="Title-btn-wrapper">
        <button className="array-btn" value="Array Prototypes" name="arrayEvent" onClick={this.handleClick}>Array Prototypes</button>
        {reviewBtn}
        <button value="String Prototypes" name="stringEvent" onClick={this.handleClick}>String Prototypes</button>
      </section> 
    );
  }
}