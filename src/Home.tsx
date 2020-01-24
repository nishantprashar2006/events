import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render(){
    return (
      <div>
        <h1>Welcome Dikshit!</h1>
  
        <Link to="/"><button>Back</button></Link>
      </div>
    );
  }
}

export default Home;
