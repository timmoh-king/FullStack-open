import React from "react"
import Header from "./components/Header"
import Content from "./components/Content"
import Total from "./components/Total"

const App = () => {
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

  const arto = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
    greet: function() {
      console.log('hello, my name is ' + this.name + 'I am ' + this.age + ' years')
    },
  }
  arto.growOlder = function() {
    this.age += 1
  }
  arto.greet()
  arto.growOlder()
  arto.greet()

  class Person {
    constructor(name, age) {
      this.name = name
      this.age = age
    }
    greet() {
      console.log('hello, my name is ' + this.name)
    }
  }
  
  const adam = new Person('Adam Ondra', 29)
  adam.greet()
  
  const janja = new Person('Janja Garnbret', 23)
  janja.greet()

  return (
    <div>
      <Header course={course} />
      <Content part={parts[0].name} exercise={parts[0].exercises} />
      <Content part={parts[1].name} exercise={parts[1].exercises} />
      <Content part={parts[2].name} exercise={parts[2].exercises} />
      <Total exercise1={parts[0].exercises} exercise2={parts[1].exercises} exercise3={parts[2].exercises} />
    </div>
  )
}

export default App
