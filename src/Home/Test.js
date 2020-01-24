import React from 'react';
import {Person} from './Person'

class Test extends React.Component {    
    
    componentDidMount(){
        
        console.log(new Person("Dikshit",23));
    }
    

  render(){
      return (
        <div> 
            Hello
        </div>
      )
  }
}

export default Test;
