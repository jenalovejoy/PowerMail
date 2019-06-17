import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
import '../css/ComposeStyle.css';

export class ComposePage extends Component {
    render() {
        return(
            <div className="container">
                <div id="form" className="row align-items-left justify-content-left">
                    <div>
                        <label>To:</label>
                        <input id="to" type="email" className = "submissionfield" name="email" placeholder="abc@abc.com" />
                    </div>
                    <div>
                        <label>Cc:</label>
                        <input id = "cc" type = "email" className="submissionfield" name="cc" placeholder="abc@abc.com" />
                    </div>
                    <div>
                        <label>Bcc:</label>
                        <input id = "bcc" type = "email" className = "submissionfield" name="bcc" placeholder="abc@abc.com" />
                    </div>
                    <div>
                        <label>Subject:</label>
                        <input id = "subject" type = "text" className = "submissionfield" name="subject" placeholder="Subject Line" />
                    </div>
                    <div>
                        <textarea rows = "10" cols = "100" placeholder="Write email message here."></textarea>
                    </div>
                </div>


                <div id="buttons" className="row align-items-center justify-content-center">
                    {/* <div class="col"><button type="button" class="btn" id="SendButton">Send</button></div> */}
                    <div className="col"><SendButton /></div>
                    <div className="col"><button type="button" className="btn2" id="SaveDraftButton">Save Draft</button></div>
                    <div className="col"><button type="button" className="btn2" id="DiscardButton">Discard</button></div>
                    <NavLink exact to='/'>
                        <div className="col"><button type="button" className="btn2" id="BackButton">Back to Inbox</button></div>
                    </NavLink>
                </div>
            </div>
        );
    }
}

class SendButton extends Component {
    handleClick = () => {
        console.log('Sending email...');

        let email = 'dn.luu03@gmail.com';
        let pw = 'dkbt rrlq vvfl bztd'; 
        let from = '"Dominic Luu" <dn.luu03@gmail.com>';

        let recipient = $('#to').val();
        let subject = $('#subject').val();
        let textBody = $('textarea').val();

        $.post('/smtp', 
            {
                host: 'gmail',
                port: '587',
                email: email,
                pw: pw,
                from: from, 
                recipient: recipient,
                subject: subject,
                text: textBody,
                html: '<div>' + textBody + '</div>'
            }, 
            function(data) {
                console.log(data)
            });
    }

    render() {
        return (
            <button onClick={this.handleClick} type="button" className="btn" id="SendButton">
                Send
            </button>
        );
    }
}