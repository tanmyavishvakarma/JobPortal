import React,{Component} from 'react'
import './jobprofile.css'

import {Container,Row,Col } from 'react-bootstrap';
class JobProfile extends Component{
    render(){
        const profile=this.props.match.params;
        console.log(profile)
        return(
            <Container>
                <Row className="row">
                    <Col sm={12}>
                        <div className="profile">
                            {profile.jobtitle}
                            <hr></hr>
                            <span>Company</span>: {profile.company}
                            <br></br>
                            <span>Location</span>: {profile.officelocation}
                            <br></br>
                            <span>Type</span>: {profile.jobtype}
                            <br></br>
                            <span>By</span>S: {profile.publisher}
                            <br></br>
                        </div>
                        <div className="profile">
                            
                        </div>
                    </Col> 
                </Row>
            </Container>
         
        );
    }
}

export default JobProfile;



        //   {/* <div className="box">
        //             <div className="resume">
        //                 <br></br>
        //                 Attach Resume
            
        //                 <br></br>
        //                 <input type="file"></input>
                        
        //             </div> 
        //         </div>