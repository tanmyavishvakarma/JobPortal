import React,{Component} from 'react'

class JobCard extends Component{
    render(){
        return(
            <div className="card">
                <div className="card-title">{this.props.jobtitle}</div>
                <hr></hr>
                <div className="com">{this.props.company}</div>
                <div className="loc">{this.props.officelocation}</div>
                <div className="type">{this.props.jobtype}</div>
                <button>Apply</button>
            </div>
        )
    }
}

export default JobCard;