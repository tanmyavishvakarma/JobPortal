import React,{Component} from 'react'
import { Link } from "react-router-dom";
class SignInLinks extends Component{
    render(){
        return(
            <div>
            <li><Link className="menu1 white-text" to="/findJob">Find A Job</Link></li>
            <li><Link className="white-text" to="/postJob">Post A Job</Link></li>
         
            <li><Link className="white-text"  to="/register">Register</Link></li>
            <li><Link className="white-text" to="/login">Login</Link></li>
            </div>
        );
    }
}
export default SignInLinks;