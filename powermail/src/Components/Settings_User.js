import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class SettingsUserPage extends Component {
    render() {
        return(
            <div class="container">
                <div class="d-inline-block" id="inbox-header">
                    <div class="logo mt-2">power<i><b>mail</b></i></div>   

                    <div class="row mt-4" id="nav-buttons">
                        <div class="col-3 col-lg-2 justify-self-start">
                        </div>
                        <div class="col-6 col-lg-6">
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
                        <NavLink to='/settings/user/'>
                            <div class="row">User Information</div>
                        </NavLink>

                        <NavLink to='/settings/accounts/'>
                            <div class="row">Edit Accounts</div>
                        </NavLink>

                        <NavLink to='/settings/preferences/'>
                            <div class="row">View Preferences</div>
                        </NavLink>
                    </div>
                    <div class="col pt-2 px-4 d-inline-block" id="view-preferences">
                        <div class="row pt-2 px-4" id="view-title"><b>Edit User Information</b></div>
                    </div>
                </div>
            </div>

            
        );
    }
}