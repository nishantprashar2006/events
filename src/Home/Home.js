import React from 'react';
//import Navbar from './Navbar/Navbar';
import Test from './Test'
import { tsImportEqualsDeclaration } from '@babel/types';
let count = 0;
let nm = "";
const axios = require('axios');
class Home extends React.Component {
    state = {
        currTime: null,
        currname: "",
        namArr : ['nishant','dikshit', 'vivek']
    }

    timeGap() {
        if(count < this.state.namArr.length){
            nm += this.state.namArr[count] + ",";
            count++;
        }
        
    }

    x = async () => {
        const response =
          await axios.get("http://localhost:8080/user/getUser")
        this.setState({
            currname : response.data
        })
    }

    componentDidMount() {
        setInterval(() =>{
            this.timeGap()
        }, 1000)
    }

    render() {
        return (
            <div>
                <h1>Welcome {this.state.currname}</h1>
                <p>{this.state.currTime}</p>
                <button className="btn btn-success btn-md" onClick={this.x}>Submit</button>
                <Test nam = {this.state.currname} arr = {this.state.namArr}/>
            </div>

        );

    }
}

export default Home;