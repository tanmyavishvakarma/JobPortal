import React from 'react'
import {Component} from 'react';
import './register.css'
import {Button} from 'react-bootstrap'
import axios from 'axios'
class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            password:''
        }
        this.handleEmailChange=this.handleEmailChange.bind(this)
        this.handlePasswordChange=this.handlePasswordChange.bind(this)
        this.handleNameChange=this.handleNameChange.bind(this)
    }

    handleNameChange=(e)=>{
        this.setState({
            name:e.target.value,
        })
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
        const registered = {
            name:this.state.name,
            email:this.state.email,
            password:this.state.password
        }

        axios.post('http://localhost:4000/api/register',registered)
            .then(response=>console.log(response.data))
        
        

        window.location="/"

    }
    render(){
        return (
            <div className="rcontainer">
                <div className="tophead">
                    Create Account
                </div>    
                <form className="rform green-text">
                <div className="input-field green-text">
                                <label className="rlabel">
                                    Name
                                </label>
                            <input value={this.state.name} onChange={this.handleNameChange} id="name" name="name" type="text"></input>
                        </div>
                        <div className="input-field">
                                <label className="rlabel">
                                    Email
                                </label>
                            <input value={this.state.email} onChange={this.handleEmailChange} id="email" name="email" type="email"></input>
                        </div>
                        <div className="input-field">
                                <label className="rlabel">
                                    Password
                                </label>
                            <input value={this.state.password} onChange={this.handlePasswordChange}id="password" name="password" type="password"></input>
                        </div>
                        <div btn-wrapper>
                            <Button onClick={this.handleSubmit} className="rbtn" value="Submit" type="submit">Register</Button>
                        </div>
                </form>
            </div>
        )
    }
}
export default Register;
