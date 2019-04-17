import React, { Component } from 'react'
import './_App.scss'
import Card from './Card';
import Title from './Title';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      prototypes: [],
      topicChoice: null,
      studyCards: [],
      review: false,
    }
  };

  componentDidMount() {
    fetch('https://fe-apps.herokuapp.com/api/v1/memoize/1901/michaelks-datset/learnprototypes')
      .then(response => response.json())
      .then(prototypes => this.setState({ 
        prototypes: prototypes }))
      .catch(error => console.log(error))
  };
  componentWillUpdate(){  
    for(let i = 0; i < localStorage.length; i++) {
     this.state.studyCards.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
    }
  };
  
    
    selectTopic = (topic) => {
      let topicChoice = this.state.prototypes.learnPrototypes.filter(prototype => {   
        return prototype.category === topic
      })
    this.setState({topicChoice: topicChoice})
      };

      selectReview = () => {
        this.setState({ review: !this.state.review})
      };
      
      render() {
        let studyMode
        if(this.state.review  === true){
          studyMode = <Card topicChoice={this.state.studyCards}/>
        } else {
          studyMode = <Card topicChoice={this.state.topicChoice}/>
        };
        return (
          <div className="App">
            <header className='App-header'>   
            <h1>Prototype Building Blocks</h1>
            </header>
          <Title selectTopic={this.selectTopic} selectReview={this.selectReview}/>
            {studyMode}
          </div>
    )
  }
};