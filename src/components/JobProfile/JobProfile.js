import React,{Component} from 'react'

class JobProfile extends Component{
    render(){
        const profile=this.props.match.params;
        console.log(profile)
        return(
            <div>
                {profile.jobtitle}
                {profile.company}
                {profile.officelocatio}
                {profile.jobtype}
                {profile.publisher}
            </div>
        );
    }
}

export default JobProfile
