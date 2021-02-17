import './achive.css'
import CountUp from 'react-countup';

import { Container, Row, Col } from 'react-grid-system';


const Achive = () => {


    return (
        <div className="achive">
            <div className="achiveContent">
                <Container fluid>
                    <Row>
                        <Col md={3} sm={6}>
                            <p><h2><CountUp end={200} delay={2} /></h2></p>
                            <p><h5>Jobs</h5></p>
                        </Col>
                        <Col md={3} sm={6}>
                            <p><h2><CountUp end={25} duration={5} delay={2} />+</h2></p>
                            <p><h5>Members</h5></p>
                        </Col>
                        <Col md={3} sm={6}>
                            <p><h2><CountUp end={50} duration={5} delay={2} />+</h2></p>
                            <p><h5>Companies</h5></p>
                        </Col>
                       
                    </Row>
                </Container>
            </div>
        </div>


    );
}

export default Achive;