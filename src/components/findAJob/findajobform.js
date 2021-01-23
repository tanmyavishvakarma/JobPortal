import axios from 'axios';
import React from 'react'
import { Component } from 'react';
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
                    jobtitle[idx].push(fetchedjob.jobtitle,fetchedjob.company,fetchedjob.location,fetchedjob.jobtype,fetchedjob.publisher)
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
                    {return <h5>{title.join(' ')}</h5>}
                )}
            </div>
        );
    }
}
export default FindJob;