import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class SettingsPreferencePage extends Component {
    render() {
        return(
            <div class="container">
                <div className="d-inline-block" id="inbox-header">
                    <div class="logo mt-2">power<i><b>mail</b></i></div>   

                    <div class="row mt-4" id="nav-buttons">
                        <div class="col-3 col-lg-2 justify-self-start">
                            {/* placeholder */}
                        </div>
                        <div class="col-6 col-lg-6">
                            {/* placeholder */}
                        </div>
                        <div class="col-2 col-lg-3">  
                            <NavLink exact to='/'>
                                <button type="button" class="nav-btn mr-3" id=""><i class="fas fa-power-off"></i></button>
                            </NavLink>
                            <NavLink exact to='/'>
                                <button type="button" class="nav-btn mr-3" id=""><i class="fas fa-inbox"></i></button>
                            </NavLink>
                        </div>
                        <div class="col-1 justify-self-end">
                            <button type="button" class="nav-btn" id=""><i class="fas fa-question-circle"></i></button>
                        </div>
                    </div>
                </div>
                <div class="row mx-2" id="settings-container">
                    <div class="col-2 pt-2" id="settings-directory">
                        <NavLink to='/settings/user'>
                            <div class="row">User Information</div>
                        </NavLink>

                        <NavLink to="/settings/accounts">
                            <div class="row">Edit Accounts</div>
                        </NavLink>

                        <NavLink>
                            <div class="row">View Preferences</div>
                        </NavLink>
                    </div>
                    <div class="col pt-2 px-4 d-inline-block" id="view-preferences">
                        <div class="row pt-2 px-4" id="view-title"><b>View Preferences</b></div>
                            <div class="row" id="theme-options">
                                <div class="col" id="color-scheme">
                                    <button type="button" class="theme-option" id="black-theme"></button>
                                    <button type="button" class="theme-option" id="grey-theme"></button>
                                    <button type="button" class="theme-option" id="white-theme"></button>
                                    <button type="button" class="theme-option" id="blue-theme"></button>
                                    <button type="button" class="theme-option" id="yellow-theme"></button>
                                    <button type="button" class="theme-option" id="green-theme"></button>
                                    <button type="button" class="theme-option" id="pink-theme"></button>
                                    <button type="button" class="theme-option" id="purple-theme"></button>
                                    <button type="button" class="theme-option" id="teal-theme"></button>
                                </div>
                                <div class="col" id="font-size-selector">
                                    <button type="button" class="text-option" id="small-theme">Small</button>
                                    <button type="button" class="text-option" id="medium-theme">Standard</button>
                                    <button type="button" class="text-option" id="large-theme">Large</button>
                                    <button type="button" class="text-option" id="xlarge-theme">Extra Large</button>
                                </div>
                            </div>
                        </div>
                </div>

            </div>
        );
    }
}