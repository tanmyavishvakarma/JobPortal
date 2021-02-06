import React,{Component} from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'
class SignOutLinks extends Component{
    constructor(props){
        super(props);
        this.handleLogout=this.handleLogout.bind(this);
    }
    handleLogout=(e)=>{
        localStorage.clear();
        localStorage.setItem("links","out")
        window.location.reload();
        window.location=('/')
    }
    render(){
        return(
            <div>
            <li><Link className="menu1 white-text" to="/findJob">Find A Job</Link></li>
            <li><Link className="white-text" to="/postJob">Post A Job</Link></li>
            <li><Link className="white-text" onClick={this.handleLogout} >Log Out</Link></li>
            <li><Link className="white-text"  to="/register">Register</Link></li>
            </div>
        );
    }
}
export default SignOutLinks;