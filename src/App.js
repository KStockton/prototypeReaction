import React, { Component } from 'react'
import './App.scss'
import Card from './Card'
import Title from './Title'


export default class App extends Component {
  constructor(){
    super()
    this.state = {
      prototypes: [],
      topicChoice: null
    }
  }

  componentDidMount() {
    fetch('https://api.jsonbin.io/b/5ca76bf0a40eb3474aecf917/3')
      .then(response => response.json())
      .then(prototypes => this.setState({ 
        prototypes: prototypes }))
      .catch(error => console.log(error))
  }
    
    selectTopic = (topic) => {
      let quizTopic = this.state.prototypes.filter(prototype => {   
        return prototype.category === topic
      })
    this.setState({topicChoice: quizTopic})
      }

      
      render() {
        console.log(this.state.prototypes)
        return (
          <div className="App">
        <header className='App-header'>   
          <h1>React Grind</h1>
        </header>
        <Title selectTopic={this.selectTopic}/>
        <Card topicChoice={this.state.topicChoice}/>
      </div>
    )
  }
}