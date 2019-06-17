import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class RegisterPage extends Component {
    render() {
        return (
            <div class="container">
                <div id="header" class="row justify-content-center align-items-center">
                    <div class="col">
                        <div class="logo">power<i><b>mail</b></i></div>
                    </div>
                </div>
                <div id="subheader" class="row justify-content-center align-items-center">
                    <div class="col">
                        <div id="instruction">Enter new account information</div>
                    </div>
                </div>
                <div id="form" class="mt-5 row align-items-center justify-content-center">
                    <div class="form-inline">
                        <label for="inputsm">username&nbsp;</label>
                        <input type="text" class="form-control input-sm" id="usernameinput" />
                    </div>
                    <div class="form-inline">
                            <label for="inputsm">password&nbsp;</label>
                            <input type="password" class="form-control input-sm" id="password" /> 
                    </div>
                    <div class="form-inline">
                            <label for="inputsm">confirm pw&nbsp;</label>
                            <input type="password" class="form-control input-sm" id="passwordConfirm" />
                    </div>
                </div>
                <div id="buttons" class="row align-items-center justify-content-center">
                    <NavLink exact to="/">
                        <button type="button" className="btn" id="GoBackButton">Go back</button>
                    </NavLink>
                    <NavLink to="/">
                        <div class="col">
                            <RegisterButton loginFunc={this.props.loginFunc} />
                        </div>
                    </NavLink>
                </div>
            </div>
        );
    }
}

class RegisterButton extends Component {
    handleClick = () => {
        this.props.loginFunc();
    }


    render() {
        return (
            <button onClick={this.handleClick} type="button" className="btn" id="RegisterButton">Register</button>
        );
    }
}

