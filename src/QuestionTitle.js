import React from 'react' 
import './QuestionTitle.css'

const QuestionTile = (props) =>{
  console.log(props)
 return(
  <article >
    <h3>Question</h3>
    <section>
      <button>Answer 1</button>
      <button>Answer 2</button>
    </section>
  </article>
 )
}
 
export default QuestionTile;