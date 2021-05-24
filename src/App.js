import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App-header">
      <Counter></Counter>
      <Users></Users>
      <Osamara></Osamara>
      <Practice></Practice>
      <Person name="Rimon" profession="programmer"></Person>
      <Person name="Rimon" profession="programmer"></Person>
      <Person name="Rimon" profession="programmer"></Person>
      <Person name="Rimon" profession="programmer"></Person>

    </div>

  );
  //Person nother page
  function Person(props) {
    return(
      <div style={{border: '2px solid red', margin: '5px', padding: '4px'}}>
        <p style={{textAlign: 'center'}}>i am a react person</p>
        <h2>Name : {props.name}</h2>
        <p>profession: {props.profession}</p>
      </div>
    )
  }
  //Counter nother page
  function Counter(){

    const [count, setCount] = useState(10)
    const handleIncrease = () => {
      const newCount = count + 1;
      setCount(newCount);
    }
    return(
      <div>
        <h2>Count: {count}</h2>
        <button onClick={handleIncrease}>Increase</button>
      </div>
    )
  }
  //Dynamic users
  function Users(){
    const [users, setUsers] = useState([])
    useEffect (() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
    }, [])
    return(
      <div>
        <h1>Dynamic users: {users.length}</h1>
        {
          console.log(users)
        }
        {
          users.map(user => <li>{user.phone}</li>)
        }
      </div>
    )
  }
  //practice page
  function Practice(){
    const [count, setCount] = useState(20)
    const handleIncreaseO = () => {
      const adding = count + 1;
      setCount(adding)
    }
    return(
      <div>
        <h1>Count:{count} </h1>
        <button onClick={handleIncreaseO}>P-Increase</button>
      </div>
    )
  }
  //practice dynamic
  function Osamara() {
    const [todos, setTodos] = useState([])
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => setTodos(data))
    }, [])
    return (
      <div>
        <h1>Hello world: {todos.length}</h1>
        {
          console.log(todos)
        }
        {
          todos.map(todo => <li>{todo.title}</li>)
        }

      </div>
    )
    
  }
}

export default App;
