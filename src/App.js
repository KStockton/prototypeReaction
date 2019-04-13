import React, { Component } from 'react'
import Header from './Header'
import './App.scss'
import Card from './Card'
import Title from './Title'


export default class App extends Component {
  constructor(){
    super()
    this.state = {
      prototypes: [],
      // arrayQuestions: null,
      // stringQuestions: null,
      topicChoice: null
    }
  }

  componentDidMount() {
    fetch('https://api.jsonbin.io/b/5ca76bf0a40eb3474aecf917/1')
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

        return (
          <div className="App">
        <Header />
        <Title selectTopic={this.selectTopic}/>
        <Card topicChoice={this.state.topicChoice}/>
      </div>
    )
  }
}









// componentDidUpdate() {
//   // if(this.state.arrayPrototypes === true){
//     let tr = Object.keys(this.state).find(element => 'questionStatus')
//     let abj = this.sortPrototyes(this.state.prototypes)

    // let str = this.sortPrototyes(this.state.)
    // console.log(str)
    // console.log(abj)

  
  ///

// this.setCategory = (selectedCategory) =>{
//     const newState = prototypes.filter(el => {
//       return el.category === "Array Prototypes"
//     })
//     this.setState.
//   }















// import React, { Component } from 'react';
// import Header from './Header';
// import Banner from './Banner';
// import Stories from './Stories';
// import Footer from './Footer';
// import './App.css';

// const stories = [
//   {
//     img: './story1.jpg',
//     title: 'Winning at Fonts',
//     desc: 'or, Why you should care about typography',
//     authImg: './louisa.png',
//     authName: 'Louisa',
//     estTime: '2 min'
//   },
//   {
//     img: './story2.jpg',
//     title: 'Hoodlums: a dissertation',
//     desc: 'Examining villains in modern storytelling',
//     authImg: './alternate.png',
//     authName: 'Nathaniel',
//     estTime: '10 min'
//   },
//   {
//     img: './story3.jpg',
//     title: 'Halloween is a year-round sport',
//     desc: 'Those who say otherwise just aren\'t trying hard enough.',
//     authImg: './leta.png',
//     authName: 'Leta',
//     estTime: '8 min'
//   },
//   {
//     img: './story4.jpg',
//     title: 'How to Improve Learning and Classroom Engagement with Humor',
//     desc: 'Okay, so first of all, everybody knows fart jokes are hilarious ...',
//     authImg: './pamela.png',
//     authName: 'Pamela',
//     estTime: '11 min'
//   }
// ]




// export default class App extends Component {
//   constructor () {
//     super() 
//       this.state = {
//       stories: stories,
//       count: 5
//       }
//     }

//       increaseCount = () => {
//         const newState = {
//           // eslint-disable-next-line react/no-direct-mutation-state
//           count: this.state.count += 1
//         }
//         this.setState(newState)
//       }
  

//   render() {
//   return (
//     <div className='App'>
//       <Header />
//       <Banner />
//       {/* <h3></h3> */}
//       <button  className="button dark" onClick={this.increaseCount}>{this.state.count}</button>
//       <Stories  storiesTitle="Today's Top Stories"
//                 stories={this.state.stories} />
//       <Stories  storiesTitle="Pop Culture"
//                 stories={this.state.stories} />
//       <Footer />
//     </div>
//   );
//   }
// }

// // export default App;
