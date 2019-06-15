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
      localStorage: 0,
    }
  };

  componentDidMount() {
    fetch('https://fe-apps.herokuapp.com/api/v1/memoize/1901/michaelks-datset/learnprototypes')
      .then(response => response.json())
      .then(prototypes => this.setState({ 
        prototypes: prototypes.learnPrototypes }))
      .catch(error => console.log(error))
  };
  
  componentWillUpdate(){ 
    
    for(let i = 0; i < localStorage.length; i++) {
     this.state.studyCards.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
    }
  };
  
    
    selectTopic = (topic) => {
      let topicChoice = this.state.prototypes.filter(prototype => {   
        return prototype.category === topic
      })
      this.setState({topicChoice: topicChoice})
    };

      selectReview = () => {
        this.setState({ review: !this.state.review})
      };
      
      render() {
        console.log("marcus", this.state)
        let studyMode
        if(this.state.review  === true && this.state.studyCards.length > 0){
          studyMode = <Card topicChoice={this.state.studyCards}/>
        } else {
      
          studyMode = <Card topicChoice={this.state.topicChoice}/>
        };
        return (
          <div className="App">
            <header className='App-header'>   
            <h1>Prototype Building Blocks</h1>
            </header>
          <Title selectTopic={this.selectTopic} selectReview={this.selectReview} review={this.state.studyCards}/>
            {studyMode}
          </div>
    )
  }
};