import React,{Component} from 'react'
import './home.css'
import CountUp from '../countup/Countup'
class Home extends Component{
    render(){
        return(
            <div className="container">
                {/* <div class="stats">
                    <div className="job">
                        3000
                        <div className="title">Jobs</div>
                    </div>
                    <div className="job">
                        3000
                        <div className="title">Members</div>
                    </div>
                    <div className="job">
                        3000
                        <div className="title">Companies</div>
                    </div>
                </div> */}
                <center>   <CountUp></CountUp></center>
             
            </div>
           
        );
    }
}
export default Home;