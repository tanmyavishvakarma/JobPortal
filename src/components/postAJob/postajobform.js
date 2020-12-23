import React, { Component } from 'react'
import './postajob.css'
import {Radio} from '@material-ui/core/Radio';

class postajobform extends Component{
    render(){
        return(
            <div className="pcontainer">
                <div className="tophead">
                    Post a Job
                </div>
                <form>
                    <div className="input-field">
                        <label className="plabel" htmlFor="jobtitle">Job Title</label>
                        <input  id="jobtitle"  type ="text" name="jobtitle" ></input>
                    </div>
                   < div className="input-field">
                        <label className="plabel" htmlFor="Company">Company</label>
                        <input  id="company"  type ="text" name="company" ></input>
                    </div>
                    <div className="input-field">
                        <label className="plabel" htmlFor="jobtitle">Job Title</label>
                        <input  id="jobtitle"  type ="text" name="jobtitle" ></input>
                    </div>
                    <Radio />
                    
                </form>
            </div>
        );
    }
}

export default postajobform