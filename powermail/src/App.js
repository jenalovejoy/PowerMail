import  React, { Component } from 'react';
import './css/ComposeStyle.css';
import './css/PowerStyles.css';

import { InboxHeader, InboxBody } from './Components/Inbox.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emails: {}
    }  
    

  }

  componentDidMount() {
    this.updateEmails();
  }
    
  updateEmails() {
    fetch('/imap?email=dn.luu03&host=gmail&auth=BellevueCS&num=6', {
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
    // console.log(this.state.emails);
    return (
      <div className="container">
        {/* <Inbox />   */}
        <InboxHeader refreshFunc={this.updateEmails.bind(this)} />
        <InboxBody emails={this.state.emails} />
      </div>
    );
  }
}

export default App;
