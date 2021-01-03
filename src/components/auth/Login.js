import React from 'react'
import {Component} from 'react';
import './login.css'
import {Button} from 'react-bootstrap'
import axios from 'axios'


class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
        this.handleEmailChange=this.handleEmailChange.bind(this)
        this.handlePasswordChange=this.handlePasswordChange.bind(this)
        
    }

    handleEmailChange=(e)=>{
        this.setState({
            email:e.target.value,
        })
    }
    handlePasswordChange=(e)=>{
        this.setState({
            password:e.target.value,
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const loggedin = {
            email:this.state.email,
            password:this.state.password
        }

        axios.post('http://localhost:4000/api/login',loggedin)
            .then(response=>console.log(response.data))
        
        

        window.location="/"

    }
    render(){
        return(
            <div className="lcontainer">
                <div className="tophead">
                    Login
                </div>
                <form className="lform">
                    <div className="input-field ">
                        <label className="llabel">Email</label>
                        <input value={this.state.email} onChange={this.handleEmailChange} type="text"></input>
                    </div>
                    <div className="input-field">
                        <label className="llabel">Password</label>
                        <input type="password" value={this.state.password} onChange={this.handlePasswordChange}></input>
                    </div>
                    <div btn-wrapper>
                    <Button onClick={this.handleSubmit} className="lbtn" value="Submit" type="submit">Login</Button>
                    </div>
                
                </form>
            </div>
        );
    }
}
export default Login;
