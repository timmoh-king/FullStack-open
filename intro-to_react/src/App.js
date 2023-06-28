import React from 'react'
import { useState } from 'react'
import Button from './components/Button'
import History from './components/History'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGood = () => {
    const updatedGood = (good + 1)
    setGood(updatedGood)
    const updatedAllGood = updatedGood + neutral + bad
    setAll(updatedAllGood)
    setAverage(updatedAllGood / 3)
    setPositive(updatedAllGood * 100)
  }

  const handleNeutral = () => {
    const updatedNeutral = (neutral + 1)
    setNeutral(updatedNeutral)
    const updatedAllNeutral = updatedNeutral + good + bad
    setAll(updatedAllNeutral)
    setAverage(updatedAllNeutral / 3)
    setPositive(updatedAllNeutral * 100)
  }

  const handleBad = () => {
    const updatedBad = (bad + 1)
    setBad(updatedBad)
    const updatedAllBad = updatedBad + good + neutral
    setAll(updatedAllBad)
    setAverage(updatedAllBad / 3)
    setPositive(updatedAllBad * 100)
  }
  
  console.log(average)
  return (
    <div>
      <h1>give feedback</h1>
      <div className='inline-flex'>
        <Button onClick={handleGood} buttonText='good' />
        <Button onClick={handleNeutral} buttonText='neutral' />
        <Button onClick={handleBad} buttonText='bad' />
      </div>
      <h1>Statistics</h1>
      <div>
        <History good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
      </div>
    </div>
  )
}

export default App

