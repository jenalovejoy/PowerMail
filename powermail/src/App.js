import  React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link, NavLink, Redirect } from 'react-router-dom';
import './css/ComposeStyle.css';
import './css/PowerStyles.css';

import { InboxHeader, InboxBody } from './Components/Inbox.js';
import { LoginPage } from './Components/Login.js';

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



    this.updateEmails();



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

  // Firebase
  componentWillUnmount() {
    // this.authUnRegFunc();
  }


  updateEmails() {
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

  render() {  
    let renderInboxPage = () => {
      return (
        <div className="container">
          <InboxHeader refreshFunc={this.updateEmails.bind(this)}/>
          <InboxBody emails={this.state.emails}/>
        </div>
      );
    }

    let renderLoginPage = () => {
      return (
        <LoginPage />

      );
    }

    // console.log(this.state.emails);

    return (
      // <div className="container">
      //   {/* <Inbox />   */}
      //   <InboxHeader refreshFunc={this.updateEmails.bind(this)} />
      //   <InboxBody emails={this.state.emails} />
      // </div>

      <BrowserRouter>
        <Switch>
          {/* <Route path='/inbox' component={Inbox} /> */}
          {/* <Route exact path='/' render={renderInboxPage}/> */}
          <Route exact path='/' render={renderLoginPage}/>
        </Switch> 
      </BrowserRouter>
    );
  }
}

export default App;
