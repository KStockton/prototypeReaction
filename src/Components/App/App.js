import React, { Component } from 'react'
// import './_App.scss'
import Card from '../Card/Card';
import Title from '../Title/Title';

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
      this.setState({topicChoice})
    };

      selectReview = () => {
        this.setState({ review: !this.state.review})
      };
      
      render() {
        const { review, studyCards, topicChoice } = this.state;
        let studyMode;

        if(review  === true && studyCards.length > 0){
          studyMode = <Card topicChoice={studyCards}/>
        } else {
      
          studyMode = <Card topicChoice={topicChoice}/>
        };

        return (
          <div className="App">
            <header className='App-header'>   
            <h1>Prototype Building Blocks</h1>
            </header>
          <Title selectTopic={this.selectTopic} selectReview={this.selectReview} review={studyCards}/>
            {studyMode}
          </div>
    )
  }
};