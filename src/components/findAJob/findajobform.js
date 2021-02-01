import axios from 'axios';
import React from 'react'
import { Component } from 'react';
import { Button } from 'react-bootstrap';
import './findajob.css'

class FindJob extends Component{
    constructor(props){
        super(props);
        this.state={
            fetchedjobs:[],
            jobtitle:[],
        }

    }

    componentDidMount(){
        axios.get('http://localhost:4002/api/findjob')
            .then(res=>{
                this.setState({
                    fetchedjobs:res.data
                })
                let jobtitle=[]
                this.state.fetchedjobs.map((fetchedjob,idx)=>{
                    jobtitle.push([]);
                    jobtitle[idx].push(fetchedjob.jobtitle,fetchedjob.company,fetchedjob.location,fetchedjob.jobtype)
                })
  
                this.setState({
                    jobtitle
                })
            
            })
    }
    render(){
        return(

            <div className="content">
                {this.state.jobtitle.map(title=>
                    {return <h5><a className="acontent" href="http://localhost:3000/jobprofile">{title.join(' ')}</a></h5>}
                )}
               
            </div>
        );
    }
}
export default FindJob;