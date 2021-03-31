
  
import React,{Component} from 'react'
import './jobprofile.css'
import {Button} from 'react-bootstrap'
import {Container,Row,Col } from 'react-bootstrap';
class JobProfile extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    handleSubmit=(e)=>{
        window.location=("/")
    }
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
                            <span>By</span>: {profile.publisher}
                            <br></br>
                        </div>
                        <div className="resume">
                            Attach Resume
                            <br></br>
                            <input type="file"></input>
                            <br></br>
                            <div btn-wrapper>
                            <Button onClick={this.handleSubmit} className="btn" value="Submit" type="submit">Submit Application</Button>
                        </div>
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
