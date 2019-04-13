import React from 'react' 
import './QuestionTitle.scss'

const QuestionTile = (props) =>{
      const { id, category, questions, answers, resource, correctAnswer} = props

 return(
  <article >
    <h3>{questions}</h3>
    <section className="answer-wrapper">
      { answers.map(answer =>{
        return <button value={answer}>{answer}</button>
      })
      }
    </section>
  </article>
 )
}
 
export default QuestionTile;