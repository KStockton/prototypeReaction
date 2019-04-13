import React from 'react' 
import './QuestionTitle.scss'

const QuestionTile = (props) =>{
  console.log(props)
 return(
  <article >
    <h3>Question</h3>
    <section className="answer-wrapper">
      <button>Answer 1</button>
      <button>Answer 2</button>
      <button>Answer 3</button>
    </section>
  </article>
 )
}
 
export default QuestionTile;