import React, { Component } from 'react'
import './App.scss'
import Card from './Card'
import Title from './Title'


export default class App extends Component {
  constructor(){
    super()
    this.state = {
      prototypes: [],
      topicChoice: null,
      studyCards: [],
      review: false,
    }
  }

  componentDidMount() {
    fetch('https://fe-apps.herokuapp.com/api/v1/memoize/1901/michaelks-datset/learnprototypes')
      .then(response => response.json())
      .then(prototypes => this.setState({ 
        prototypes: prototypes }))
      .catch(error => console.log(error))
  }
compon
  
  componentWillUpdate(){
    if(this.state.studyCards.length === localStorage.length) {
      return true;
    } else {
    for(let i = 0; i < localStorage.length; i++) {
      console.log('localStorage', localStorage)
     this.state.studyCards.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
    }
  }
  }
  
    
    selectTopic = (topic) => {
      let topicChoice = this.state.prototypes.learnPrototypes.filter(prototype => {   
        return prototype.category === topic
      })
    this.setState({topicChoice: topicChoice})
      }

      selectReview = () => {
        this.setState({ review: !this.state.review})
      }

      
      render() {
        console.log(this.state.review)
      //  console.log('this.state.prototypes', this.state.prototypes)
        console.log('studyCards', this.state.studyCards)
        let studyMode
        if(this.state.review  === true){
          studyMode = <Card topicChoice={this.state.studyCards}/>
        } else {
          studyMode = <Card topicChoice={this.state.topicChoice}/>
        }
        return (
          <div className="App">
        <header className='App-header'>   
          <h1>Want to Play a Game</h1>
        </header>
        <Title selectTopic={this.selectTopic} selectReview={this.selectReview}/>
        {studyMode}
      </div>
    )
  }
}