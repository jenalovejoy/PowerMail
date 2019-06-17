import  React, { Component } from 'react';
// import { BrowserRouter, Switch, Route, Link, NavLink, Redirect } from 'react-router-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './css/PowerStyles.css';

import { InboxPage } from './Components/Inbox.js';
import { WelcomePage } from './Components/Welcome.js';
import { LoginPage } from './Components/Login.js';
import { RegisterPage } from './Components/Register.js';
import { ComposePage } from './Components/Compose.js';
import { SettingsPreferencePage } from './Components/Settings_Preferences.js';
import { SettingsUserPage } from './Components/Settings_User.js';
import { SettingsAccountsPage } from './Components/Settings_Accounts.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginStatus: false,
      emails: {},
    }
  }

  componentDidMount() {
    // Firebase stuff
    // this.authUnRegFunc = firebase.auth().onAuthStateChanged((firebaseUser) => {
    //   if (firebaseUser) {
    //     this.setState({ user: firebaseUser});
    //   } else {
    //     this.setState({ user: null });
    //   }
    // })

    // this.updateEmails();

  }


  updateEmails() {
    console.log("updateEmails");
    fetch('/imap?email=dn.luu03&host=gmail&auth=dkbt rrlq vvfl bztd&num=6', {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "text/html"
      }
    })
    .then(res => res.json())
      .then((data) => {
        this.setState({
        emails: data
      });
    });

  };

  logIn() {
    this.setState({
      loginStatus: true 
    })
  }

  render() {  
    let renderWelcomePage = () => {
      return (
        <WelcomePage />
      );
    }
 
    let renderLoginPage = () => {
      return (
        <LoginPage loginFunc={ this.logIn.bind(this) } />
      );
    }
  
    let renderRegisterPage = () => {
      return (
        <RegisterPage loginFunc={ this.logIn.bind(this) } />
      );
    }

    if (!this.state.loginStatus) {
      return (
        <BrowserRouter>
        <Switch>
          <Route exact path='/' render={renderWelcomePage}/>
          <Route path='/login' render={renderLoginPage}/>
          <Route path='/register' render={renderRegisterPage}/>
        </Switch> 
      </BrowserRouter>
      );
    }

    let renderInboxPage = () => {
      // this.updateEmails();
      return (
        <InboxPage refreshFunc={ this.updateEmails.bind(this) }
                    emails={ this.state.emails } />
      );
    }

    let renderComposePage = () => {
      // this.updateEmails();
      return (
        <ComposePage />
      );
    }
    
    let renderSettingsPreferences = () => {
        return(<SettingsPreferencePage />);
    }
 
    let renderSettingsAccounts = () => {
        return(<SettingsAccountsPage />);
    }
    
    let renderSettingsUsers = () => {
        return(<SettingsUserPage />);
    }
    
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={renderInboxPage}/>
          <Route path='/compose' render={renderComposePage}/>
          <Route path='/settings/preferences/' render={renderSettingsPreferences}/>
          <Route path='/settings/accounts/' render={renderSettingsAccounts}/>
          <Route path='/settings/user/' render={renderSettingsUsers}/>
        </Switch> 
      </BrowserRouter>
    );
  }
}

export default App;
