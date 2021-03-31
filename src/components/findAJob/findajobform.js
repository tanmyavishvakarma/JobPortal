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
        
                <div className="row">    
                    {this.state.fetchedjobs.map((job)=>(
                        <div className="bot" key={job.jobtitle}>
                           
                                    <Card  
                                        jobtitle={job.jobtitle} 
                                        jobtype={job.jobtype}
                                        officelocation={job.officelocation}
                                        company={job.company}
                                        publisher={job.publisher}
                                    />
                           
                          
                        </div>
                    ))}
            </div>
          
        </div>
        );
    }
}

export default FindJob;