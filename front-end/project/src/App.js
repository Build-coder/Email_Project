import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'

function GetData() {
  const formInfo = {
    username: "Bill123",
    password: "mypassword"
  }
  useEffect(() => {
    fetch("/home", {
      method: "POST",
      headers: {
        'Content-type': "application-json"
      },
      body: JSON.stringify(formInfo)
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }, [])
}

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:9000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h2> Edited For Test </h2>
        <h1>{message}</h1>
        <h2> ======= </h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
