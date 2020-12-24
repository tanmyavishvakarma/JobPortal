import React from 'react'
import {Component} from 'react';
import './login.css'

class Login extends Component{
    render(){
        return(
            <div className="lcontainer">
                <div className="tophead">
                    Login
                </div>
                <form className="lform">
                    <div className="input-field">
                        <label className="llabel">Email</label>
                        <input type="text"></input>
                    </div>
                    <div className="input-field">
                        <label className="llabel">Password</label>
                        <input type="password"></input>
                    </div>
                </form>
            </div>
        );
    }
}
export default Login;
