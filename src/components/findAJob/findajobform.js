import React, { Component } from 'react'

class findJobform extends Component{
    render(){
        return(
            <div>
                <div className="rcontainer">
                <div className="tophead">
                    Create Account
                </div>    
                <form className="rform green-text">
                <div className="input-field green-text">
                                <label className="rlabel">
                                    Name
                                </label>
                            <input value={this.state.name} onChange={this.handleNameChange} id="name" name="name" type="text"></input>
                        </div>
                        <div className="input-field">
                                <label className="rlabel">
                                    Email
                                </label>
                            <input value={this.state.email} onChange={this.handleEmailChange} id="email" name="email" type="email"></input>
                        </div>
                        <div className="input-field">
                                <label className="rlabel">
                                    Password
                                </label>
                            <input value={this.state.password} onChange={this.handlePasswordChange}id="password" name="password" type="password"></input>
                        </div>
                        <div btn-wrapper>
                            <Button onClick={this.handleSubmit} className="rbtn" value="Submit" type="submit">Register</Button>
                        </div>
                </form>
            </div>
            </div>
        );
    }
}
