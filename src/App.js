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
      studyCards: []
    }
  }

  componentDidMount() {
    fetch('https://api.myjson.com/bins/1fhx10')
      .then(response => response.json())
      .then(prototypes => this.setState({ 
        prototypes: prototypes }))
      .catch(error => console.log(error))
  }

  
  componentWillUpdate(){
    for(let i = 0; i < localStorage.length; i++){
     this.state.studyCards.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
    }
  }
    
    selectTopic = (topic) => {
      let quizTopic = this.state.prototypes.filter(prototype => {   
        return prototype.category === topic
      })
    this.setState({topicChoice: quizTopic})
      }

      
      render() {
        console.log(this.state.prototypes)
        console.log('localStorageCards', this.state.studyCards)
        return (
          <div className="App">
        <header className='App-header'>   
          <h1>React Grind</h1>
        </header>
        <Title selectTopic={this.selectTopic} />
        <Card topicChoice={this.state.topicChoice}/>
      </div>
    )
  }
}