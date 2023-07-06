import React from "react"
import { useState } from "react"
import Header from "./components/Header"
import Content from "./components/Content"
import Total from "./components/Total"
import Button from "./components/Button"
import Like from "./components/Like"

const Test2 = () => {
  const [state, setState] = useState({like: 0, comment: 0})

  const handleLike = () => {
    const newState = {
      like: state.like + 1,
      comment: state.comment
    }
    setState(newState)
  }
  
  const handleComment = () => {
    const newState = {
      comment: state.comment + 1,
      like: state.like
    }
    setState(newState)
  }

  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Like like={state.like} description='like' />
      <Like like={state.comment} description='comment' />
      <Button onClick={handleLike} buttonText='Like' />
      <Button onClick={handleComment} buttonText='Comment' />
      <Header course={course} />
      <Content part={parts[0].name} exercise={parts[0].exercises} />
      <Content part={parts[1].name} exercise={parts[1].exercises} />
      <Content part={parts[2].name} exercise={parts[2].exercises} />
      <Total exercise1={parts[0].exercises} exercise2={parts[1].exercises} exercise3={parts[2].exercises} />
    </div>
  )
}

export default Test2
