import React from 'react';
import Home from './Home/Home'
import './App.css';
import Navbar from './Navbar/Navbar';
class App extends React.Component {

  render(){
    return <div>
      <Navbar/>
      <Home/>
    </div>
  }
}

export default App;
