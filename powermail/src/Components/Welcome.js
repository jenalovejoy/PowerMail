import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class WelcomePage extends Component {

    render() {
        return (
            <div class="container">
                <div id="header" class="row justify-content-center align-items-center">
                    <div class="col">
                        <div class="logo">power<i><b>mail</b></i></div>
                    </div>
                </div>
                <div id="text" class="row align-items-center justify-content-center">
                    <div class="col">
                        <div class="text">Welcome!</div>
                    </div>
                </div>
                <div id="buttons" class="row align-items-center justify-content-center">
                    <div class="col">
                        <NavLink to='/login'>
                            <button type="button" class="btn" id="LogInButton">Log-in</button>
                        </NavLink>
                    </div>
                    <div class="col">
                        <NavLink to='/register'>
                            <button type="button" class="btn" id="CreateAccountButton">Register</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    }
}