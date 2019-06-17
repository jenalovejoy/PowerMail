import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class LoginPage extends Component {
    render() {
        return (
            <div className="container">
                <div id="header" className="row justify-content-center align-items-center">
                    <div className="col">
                        <div className="logo">power<i><b>mail</b></i></div>
                    </div>
                </div>
                <div id="subheader" className="row justify-content-center align-items-center">
                    <div className="col">
                        <div id="instruction">Log in to an existing account</div>
                    </div>
                </div>
                <div id="form" className="row mt-4 align-items-center justify-content-center">
                    <div className="form-inline">
                        <label form="inputsm">username&nbsp;</label>
                        <input type="text" className="form-control input-sm" id="usernameinput" />
                    </div>
                    <div className="form-inline">
                        <label form="inputsm">password&nbsp;</label>
                        <input type="password" className="form-control input-sm" id="input-sm" required />
                    </div>
                </div>
                <div id="buttons" className="row align-items-center justify-content-center">
                    <div className="col">
                        <NavLink exact to="/">
                            <button type="button" className="btn" id="GoBackButton">Go back</button>
                        </NavLink>
                    </div>
                    <div className="col">
                        <NavLink to="/">
                            <LoginButton loginFunc={this.props.loginFunc} />
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

class LoginButton extends Component {
    handleClick = () => {
        this.props.loginFunc();
    }


    render() {
        return (
            <button onClick={this.handleClick} type="button" className="btn" id="LogInButton">Log in</button>
        );
    }
}

