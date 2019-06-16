import  React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link, NavLink, Redirect } from 'react-router-dom';
import './css/PowerStyles.css';

import { InboxPage } from './Components/Inbox.js';
import { LoginPage } from './Components/Login.js';
import { ComposePage } from './Components/Compose.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginStatus: false,
      emails: {}
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

    this.logIn();

    // POST testing
    var fetchBody = {email: 'dn.luu03'}

    fetch('/emails', {
      method: "POST",
      body: fetchBody,
      mode: "cors",
      headers: {
        "Content-Type": "text/html"
      }
    })
   
    .then(res => res.text())
    
    .then((data) => {
      console.log("Data");
      console.log(data);
    });
  }

  componentWillUnmount() {
    // Firebase
    // this.authUnRegFunc();
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
    if (!this.state.loginStatus) {
      return (
        <LoginPage loginFunc={ this.logIn.bind(this) } />
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
 
    return (
      <BrowserRouter>
        <Switch>
          {/* <Route path='/inbox' component={Inbox} /> */}
          <Route exact path='/' render={renderInboxPage}/>
          <Route path='/compose' render={renderComposePage}/>
        </Switch> 
      </BrowserRouter>
    );
  }
}

export default App;
