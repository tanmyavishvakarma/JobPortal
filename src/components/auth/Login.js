import React from 'react'
import {Component} from 'react';
import './login.css'
import {Button} from 'react-bootstrap'
import axios from 'axios'


class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
        this.handleUsernameChange=this.handleUsernameChange.bind(this)
        this.handlePasswordChange=this.handlePasswordChange.bind(this)
        
    }

    handleUsernameChange=(e)=>{
        this.setState({
            username:e.target.value,
        })
    }
    handlePasswordChange=(e)=>{
        this.setState({
            password:e.target.value,
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const logindata = {
            username:this.state.username,
            password:this.state.password
        }

        axios.post('http://localhost:4002/api/login',logindata)
            .then(response=>{
                console.log("ui",response.data)
                if(response.data.login==="Successfully Authenticated"){
                    localStorage.setItem("publisher",response.data.publisher)
                    this.props.history.push("/home")    
                } 
                else{
                    this.props.history.push("/login")
                    alert("Invalid Username or Password")
                }
            })
    }
    render(){
        return(
            <div className="lcontainer">
                <div className="tophead">
                    Login
                </div>
                <form className="rform">
                    <div className="input-field ">
                        <label className="llabel">Username</label>
                        <input value={this.state.username} onChange={this.handleUsernameChange} type="text"></input>
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
