import React from 'react'
import { useState } from 'react'
import Button from './components/Button'
import History from './components/History'

const Test3 = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = (left + 1)
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = (right + 1)
    setRight(updatedRight)
    setTotal(left + updatedRight)
  }

  const hello = (a) => {
    const greet = () => {
      console.log('hello', a)
    } 
  }

  return (
    <div>
      <p>
      {left}
      <Button onClick={handleLeftClick} buttonText='Left' />
      <Button onClick={handleRightClick} buttonText='Right' />
      {right}
      </p>
      <br/>
      <History allClicks={allClicks} />
      <br/>
      <b>total: {total}</b>
      <button onClick={hello('maya')}>Hey</button>
    </div>
  )
}

export default Test3
