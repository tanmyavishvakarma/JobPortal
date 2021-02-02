import React,{Component} from 'react'
import './jobcard.css'

class JobCard extends Component{
    render(){
        return(
            <div className="card">
                <div className="card-title">{this.props.jobtitle}</div>
                <hr></hr>
                <div className="com">Company: {this.props.company}</div>
                <div className="loc">Location: {this.props.officelocation}</div>
                <div className="type">Job Type: {this.props.jobtype}</div>
                <br></br>
                <button>Apply</button>
            </div>
        )
    }
}

export default JobCard;