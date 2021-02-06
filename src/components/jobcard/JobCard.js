import React,{Component} from 'react'
import './jobcard.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
class JobCard extends Component{
    constructor(props){
        super(props);
        this.handleJob=this.handleJob.bind(this);
    }
    handleJob=(e)=>{
        const findval=localStorage.getItem("links")
        if(findval!=="in"){
            e.preventDefault()
            alert("You have to be logged in to apply for a job")
            window.location=('/login')
        }else{
        window.location=('/jobprofile/'+this.props.jobtitle+'/'+this.props.company+'/'+this.props.officelocation+'/'+this.props.jobtype+'/'+this.props.publisher)
        }
    }
    render(){
        return(
            <div className="card">
                <div className="card-title">{this.props.jobtitle}</div>
                <hr></hr>
                <div className="com">Company: {this.props.company}</div>
                <div className="loc">Location: {this.props.officelocation}</div>
                <div className="type">Job Type: {this.props.jobtype}</div>
                <br></br>
                <button onClick={this.handleJob}>Apply</button>
            </div>
        )
    }
}

export default JobCard;