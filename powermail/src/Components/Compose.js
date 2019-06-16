import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import '../css/ComposeStyle.css';

export class ComposePage extends Component {
    render() {
        return(
            <div class="container">
                <div id="form" class="row align-items-left justify-content-left">
                    <div>
                        <label>To:</label>
                        <input id="sender" type="email" class = "submissionfield" name="email" required="true" placeholder="abc@abc.com" />
                    </div>
                    <div>
                        <label>Cc:</label>
                        <input id = "cc" type = "email" class = "submissionfield" name="cc" placeholder="abc@abc.com" />
                    </div>
                    <div>
                        <label>Bcc:</label>
                        <input id = "bcc" type = "email" class = "submissionfield" name="bcc" placeholder="abc@abc.com" />
                    </div>
                    <div>
                        <label>Subject:</label>
                        <input id = "subject" type = "text" class = "submissionfield" name="subject" required="true" placeholder="Subject Line" />
                    </div>
                    <div>
                        <textarea rows = "10" cols = "100" required="true" placeholder="Write email message here."></textarea>
                    </div>
                </div>


                <div id="buttons" class="row align-items-center justify-content-center">
                    <div class="col"><button type="button" class="btn" id="SendButton">Send</button></div>
                    <div class="col"><button type="button" class="btn2" id="SaveDraftButton">Save Draft</button></div>
                    <div class="col"><button type="button" class="btn2" id="DiscardButton">Discard</button></div>
                    <NavLink exact to='/'>
                        <div class="col"><button type="button" class="btn2" id="BackButton"><a href = "PowerMailInbox.html" style={{color: '#FFFFFF'}}>Back to Inbox</a></button></div>
                    </NavLink>
                </div>
            </div>
        );
    }
}

class RefreshBtn extends Component {
    handleClick = () => {
        this.props.refreshFunc();
    }


    render() {
        return (
            <button onClick={this.handleClick} type="button" className="nav-btn mr-3" id="">
                <i className={this.props.icon}></i>
            </button>
        );
    }
}