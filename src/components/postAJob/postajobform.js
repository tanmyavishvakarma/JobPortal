import React, { Component } from 'react'
import './postajob.css'
import {Button} from 'react-bootstrap'
import axios from 'axios'

class postajobform extends Component{

    constructor(props){
        super(props);
        this.state={
            jobtitle:'',
            company:'',
            officelocation:'',
            jobtype:''
        }
        this.handleJobTitleChange=this.handleJobTitleChange.bind(this)
        this.handleCompanyChange=this.handleCompanyChange.bind(this)
        this.handleOfficeLocationChange=this.handleOfficeLocationChange.bind(this)
        this.handleJobTypeChange=this.handleJobTypeChange.bind(this)
    }

    handleJobTypeChange=(e)=>{
        this.setState({
            jobtype:e.target.value,
        }) 
    }

    handleJobTitleChange=(e)=>{
        this.setState({
            jobtitle:e.target.value,
        })
    }
    handleCompanyChange=(e)=>{
        this.setState({
            company:e.target.value,
        })
    }
    handleOfficeLocationChange=(e)=>{
        this.setState({
            officelocation:e.target.value,
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const postedjob = {
            jobtitle:this.state.jobtitle,
            company:this.state.company,
            officelocation:this.state.officelocation,
            jobtype:this.state.jobtype
        }

        axios.post('http://localhost:4000/api/postjob',postedjob)
            .then(response=>console.log(response.data))
        alert("Job Inserted in database")
        window.location="/"

    }
    
    render(){
        return(
            <div className="pcontainer">
                <div className="tophead">
                    Post a Job
                </div>
                <form>
                    <div className="jobblanks">
                        <div className="input-field">
                            <label className="plabel" htmlFor="jobtitle">Job Title</label>
                            <input  id="jobtitle" value={this.state.jobtitle} onChange={this.handleJobTitleChange} type ="text" name="jobtitle" ></input>
                        </div>
                        < div className="input-field">
                            <label className="plabel" htmlFor="Company">Company</label>
                            <input  id="company" value ={this.state.company} onChange={this.handleCompanyChange} type ="text" name="company" ></input>
                        </div>
                        <div className="input-field">
                            <label className="plabel" htmlFor="jobtitle">Office Location</label>
                            <input  id="officelocation"  value={this.state.officelocation} onChange={this.handleOfficeLocationChange} type ="text" name="officelocation" ></input>
                        </div>
                        <div className="radio" >
                                <label>
                                    <input name="group1" class="with-gap" value="Full Time"onChange={this.handleJobTypeChange}type="radio" defaultChecked />
                                    <span>Full Time</span>
                                </label>
                                <label>
                                    <input name="group1" class="with-gap" value="Part Time" onChange={this.handleJobTypeChange}type="radio" />
                                    <span>Part Time  </span>
                                </label>
                                <label>
                                    <input name="group1" class="with-gap " value="Internship" onChange={this.handleJobTypeChange} type="radio" />
                                    <span>Internship  </span>
                                </label>
                                <label>
                                    <input name="group1" class="with-gap" value="Freelancing" onChange={this.handleJobTypeChange} type="radio"  />
                                    <span>Freelancing</span>
                                </label>
                        </div>
                        <br></br>
                        <div btn-wrapper>
                            <Button onClick={this.handleSubmit} className="rbtn" value="Submit" type="submit">Post Job</Button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default postajobform