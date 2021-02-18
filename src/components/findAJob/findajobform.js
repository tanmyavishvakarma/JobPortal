import axios from 'axios';
import React from 'react'
import { Component } from 'react';
import './findajob.css';
import Card from '../jobcard/JobCard'

class FindJob extends Component{
    constructor(props){
        super(props);
        this.state={
            fetchedjobs:[],
      
        }

    }

    componentDidMount(){
        axios.get('http://localhost:4002/api/findjob')
            .then(res=>{
                console.log(res.data)
                this.setState({
                    fetchedjobs:res.data
                })
             
                // let jobtitle=[]
                // this.state.fetchedjobs.map((fetchedjob)=>{
                //     jobtitle.push([]);
                //     jobtitle[idx].push(fetchedjob.jobtitle,fetchedjob.company,fetchedjob.location,fetchedjob.jobtype)
                // })
  
                // this.setState({
                //     jobtitle
                // })
            
            })
    }
    render(){
        return(
            <div> 
                <div
                    style={{
                        fontSize: "3rem",
                        marginTop: "20px",
                        color: "#fff",
                    }}
                    ><div className="tophead">Jobs</div>
                        
                </div>
                {/* <Grid container spacing={1}> */}
                <div className="row flex">    
                    {this.state.fetchedjobs.map((job)=>(
                        <div className="col 14" key={job.jobtitle}>
                            {/* //    <Grid item xs={12} l={3} m={2}> */}
                                    <Card  
                                        jobtitle={job.jobtitle} 
                                        jobtype={job.jobtype}
                                        officelocation={job.officelocation}
                                        company={job.company}
                                        publisher={job.publisher}
                                    />
                                {/* </Grid> */}
                          
                        </div>
                    ))}
            </div>
            {/* </Grid> */}
        </div>
        );
    }
}

export default FindJob;