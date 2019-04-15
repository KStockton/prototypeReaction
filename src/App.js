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

      selectReview = () => {
        this.setState({ review: true})
      }

      
      render() {
        console.log('data', this.state.prototypes)
        console.log('studyCards', this.state.studyCards)
        let studyMode
        if(this.state.review  === true){
          studyMode = <Card topicChoice={this.state.studyCards}/>
        } else {
          studyMode = <Card topicChoice={this.state.topicChoice}/>
        }
        // let studyMode = (this.state.review) ? <Card topicChoice={this.state.studyCards}/> : <Card topicChoice={this.state.topicChoice}/>
        return (
          <div className="App">
        <header className='App-header'>   
          <h1>React Grind</h1>
        </header>
        <Title selectTopic={this.selectTopic} selectReview={this.selectReview}/>
        {studyMode}
      </div>
    )
  }
}