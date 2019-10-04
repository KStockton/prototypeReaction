import React, { Component } from 'react';
import QuestionTitle from '../QuestionTitle/QuestionTitle';
export default class Card extends Component {

  render() {
    const { topicChoice } = this.props;
    let displayInfo;

    if (topicChoice) {
      displayInfo = <QuestionTitle topicChoice={topicChoice}/>;
    } else {
      displayInfo = <article>
        <h2>Introduction</h2>
        <p>Test your knowledge on string and array prototypes.</p>
        <p>Begin By Selecting Array or String Prototypes Above to Begin</p>
      </article>; 
    } 
    return (
      <div className="Card-wrapper">
        <section className="title-wrapper">
          {displayInfo}
        </section>
      </div>
    );
  }
}