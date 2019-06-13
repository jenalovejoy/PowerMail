import React, { Component } from 'react';

export class LoginPage extends Component {
    render() {

        return (
            <div className="container">
                <div id="header" class="row justify-content-center align-items-center">
                    <div class="col">
                        <div class="logo">power<i><b>mail</b></i></div>
                    </div>
                </div>
                <div id="subheader" class="row justify-content-center align-items-center">
                    <div class="col">
                        <div id="instruction">Log in to an existing account</div>
                    </div>
                </div>
                <div id="form" class="row align-items-center justify-content-center">
                    <div class="form-inline">
                        <label for="inputsm">username&nbsp;</label>
                        <input type="text" class="form-control input-sm" id="usernameinput" />
                    </div>
                    <div class="form-inline">
                        <label for="inputsm">password&nbsp;</label>
                        <input type="password" class="form-control input-sm" id="input-sm" required />
                    </div>
                </div>
                <div id="buttons" class="row align-items-center justify-content-center">
                    <div class="col"><button type="button" class="btn" id="GoBackButton"><a href="index.html">Go back</a></button></div>
                    <div class="col"><button type="button" class="btn" id="LogInButton">Log in</button></div>
                </div>
            </div>
        );
    }
}
