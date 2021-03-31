import React,{Component} from 'react'
import './home.css'
import { Container, Row, Col } from 'react-grid-system';
import {
    createMuiTheme,
    responsiveFontSizes,
    MuiThemeProvider,
    Typography
  } from "@material-ui/core";

class Home extends Component{
    handlefindjob=(e)=>{
        window.location="/findjob"
    }
    handlepostjob=(e)=>{
        window.location="/postjob"
    }
    render(){
        let theme = createMuiTheme()
        theme = responsiveFontSizes(theme);
        return(
            <div className="container">
                <MuiThemeProvider theme={theme}>
                    <Typography variant="h1" className="heading">
                        <h1>JOB PORTAL</h1>
                    </Typography>
                    <Typography variant="h4" className="heading">
                        <h4>Dream a Better Future</h4>
                    </Typography>
                </MuiThemeProvider>
                <br></br>
                <Container>
                    <Row>
                        <Col sm={12} lg={6} className="col1">
                            <button onClick={this.handlefindjob} className="rbtn" value="Submit" type="submit">Find a Job</button>
                        </Col>
                        <Col sm={12} lg={6} className="col2">
                            <button onClick={this.handlepostjob} className="rbtn" value="Submit" type="submit">Post a Job</button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default Home;