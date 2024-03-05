import React, { useRef } from 'react'
import GuessCard from './GuessCard'
import ElementDetails from './ElementDetails'

const QuizWrapper = ({ element }) => {
  const checkAnswer = (input) => {
    console.log(input)
    input.toLowerCase() == element.name.toLowerCase() ? console.log('Correct') : console.log('Incorrect')
  }

  return (
    <div className='h-[575px]'>
      {/* <GuessCard element={element} checkAnswer={checkAnswer}/> */}
      <ElementDetails element={element}/>
    </div>
  )
}

export default QuizWrapper