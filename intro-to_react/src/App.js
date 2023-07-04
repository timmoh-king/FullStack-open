import React from "react";
import { useState } from "react";

const App = (props) => {
  const [persons, setPersons] = useState(props.persons);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState(0);
  const [showNumbers, setShowNumbers] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    };
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === newPerson.name) {
        alert(`${newPerson.name} is already added in the phonebook`);
        return;
      }
    }
    if (newPerson.name === "" && newPerson.number === "") {
      alert("Please enter name");
      return;
    } else {
      setPersons(persons.concat(newPerson));
      setNewName("");
      setNewNumber("");
    }
  };

  const handleInput = (e) => {
    setNewName(e.target.value);
  };

  const handleNumInput = (e) => {
    setNewNumber(e.target.value);
  };

  const showNums = showNumbers ? (
    <ul>
      {persons.map((person) => (
        <li key={person.id}>
          {person.name} {person.number}
        </li>
      ))}
    </ul>
  ) : (
    <ul>
      {persons.map((person) => (
        <li key={person.id}>{person.number}</li>
      ))}
    </ul>
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          funame: <input onChange={handleInput} placeholder="enter your name" />
        </div>
        <div>
          number:{" "}
          <input onChange={handleNumInput} placeholder="enter your number" />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <button onClick={() => setShowNumbers(!showNumbers)}>
        show {showNumbers ? "numbers" : "names"}
      </button>
      {showNums}
    </div>
  );
};

export default App;
