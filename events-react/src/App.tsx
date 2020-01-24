import React from 'react';
import logo from './logo.svg';
import Home from './Home';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  x : string = "";
  
  render(){
    return (
      <div>
        <ul>
          <li>
            <Link to="/">App</Link>
          </li>
          <li>
            <Link to="/home"><button>Home</button></Link>
          </li>
  
        </ul>
      </div>
    );
  }
  
}

export default App;
