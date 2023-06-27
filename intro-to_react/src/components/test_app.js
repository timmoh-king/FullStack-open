const Greeting = (props) => {
    return (
      <div>
        <h1>Hello {props.name} you are {props.age} years old</h1>
      </div>
    )
  }
  
  const Footer = () => {
    return (
      <div>
        greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
      </div>
    )
  }
  
  const Test = () => {
    const buddies = [
      { name: 'Peter', age: 4 },
      { name: 'Maya', age: 10 },
    ]
    const friends = [ 'Peter', 'Maya']
    const now = new Date()
    const a = 20
    const b = 10
    console.log(now, a+b)
    const name = "alx"
    return (
      <div>
        <Greeting name={name} age={b}/>
        <Greeting name='Maya' age={26 + 10} />
        <p>{friends[0]} {friends[1]}</p>
        <p>{buddies[0].name} {buddies[0].age}</p>
        <p>{buddies[1].name} {buddies[1].age}</p>
        <h2>the time is {now.toString()}</h2>
        <h3>{a} plus {b} is equal {a+b}</h3>
  
        <Footer />
      </div>
    );
  };
  
  export default Test;
  