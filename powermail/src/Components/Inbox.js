import React, { Component } from 'react';

// export default class Inbox extends Component {
//     constructor(props) {
//         super(props);

//     }

//     render() {
//         return (
//             <div>
//                 <InboxHeader />
//                 <InboxBody />
//             </div>
//         );
//     }

// }

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

export class InboxHeader extends Component {

    render() {
        return (
            <div className="d-inline-block" id="inbox-header">
                <div className="logo mt-2">power<i><b>mail</b></i></div>   

                <div className="row mt-4 pl-3 pr-2" id="nav-buttons">
                    <div className="col-3 col-lg-2 justify-self-start">
                        <button type="button" className="nav-btn" id=""><a href="index.html"><i className="fas fa-folder"></i></a></button>
                    </div>
                    <div className="col-6 col-lg-6">
                        <RefreshBtn icon="fas fa-sync-alt" refreshFunc={this.props.refreshFunc} />
                        <button type="button" className="nav-btn mr-3" id=""><a href="ComposeEmail.html" style={{color: '#FFFFFF'}}><i className="far fa-envelope"></i></a></button>
                        <button type="button" className="nav-btn mr-3" id=""><i className="fas fa-undo-alt"></i></button>
                        <button type="button" className="nav-btn mr-3" id=""><i className="fas fa-share"></i></button>
                        <button type="button" className="nav-btn mr-3" id=""><i className="fas fa-flag"></i></button>
                        <button type="button" className="nav-btn mr-3" id=""><i className="fas fa-heart"></i></button>
                        <button type="button" className="nav-btn mr-3" id=""><i className="fas fa-times"></i></button>
                    </div>
                    <div className="col-2 col-lg-3">
                        <button type="button" className="nav-btn mr-3" id=""><a href="index.html"><i className="fas fa-power-off"></i></a></button>
                        <button type="button" className="nav-btn mr-3" id=""><i className="fas fa-cog"></i></button>
                    </div>
                    <div className="col-1 justify-self-end">
                        <button type="button" className="nav-btn" id=""><i className="fas fa-question-circle"></i></button>
                    </div>
                </div>
            </div>
        );
    }
}

export class InboxBody extends Component {
    render() {
        return( 
            <div className="row mx-0" id="inbox-body">
                <div className="col-2 pt-2" id="inbox-directory">
                    Inbox <br />
                    Trash <br />
                    ETC. <br />
                </div>
                <InboxMessages emails={this.props.emails} /> 
            </div>
        );
    }
}

export class InboxMessages extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
    }

    render() {
       let emailRows = [];
       Object.keys(this.props.emails).forEach((id) => {
            // console.log(this.props.emails[id]['header'].from);
            // console.log(this.props.emails[id]['header'].subject);
            // console.log(this.props.emails[id]['header'].date);
            
            emailRows.unshift( <EmailRow 
                sender = { this.props.emails[id]['header'].from }
                subject = { this.props.emails[id]['header'].subject }
            />);
        });
 
        // console.log(emailRows)
        return (
            <div className="col pt-2 px-4 d-inline-block" id="inbox-messages">
            {/* <!-- Column Header --> */}
            <div className="row column_header mb-2">
                <div className="col-4 py-1 border-right border-light">
                    <div className="sender_column">From</div>
                </div>
                <div className="col-5 py-1 border-right border-light">
                    Subject
                </div>
                <div className="col-2 py-1 border-right border-light">
                    Date Received
                </div>
                <div className="col-1 align--end py-1 ">
                    Flag
                </div>
            </div>
            {/* <!-- Today --> */}
            {/* <div className="row list_header ml-1 mb-2">
                <div className="font-weight-bold">Today</div>
            </div> */}

            {emailRows}
            {/* <!-- Today's Emails --> */}
            {/* <EmailRow sender="JohnDoe@gmail.com" subject="Lorem ipsum dolor sit" timeStamp="3:25 PM"/>
            // <EmailRow sender="JohnDoe@gmail.com" subject="Lorem ipsum dolor sit" timeStamp="1:25 PM"/>
            // <EmailRow sender="JohnDoe@gmail.com" subject="Lorem ipsum dolor sit" timeStamp="11:25 AM"/> */}

            {/* <!-- Yesterday's Emails --> */}
            {/* <div className="row ml-1 list_header mb-2">
                <div className="font-weight-bold">Yesterday</div>
            </div> */}
            
            {/* <EmailRow sender="JohnDoe@gmail.com" subject="Lorem ipsum dolor sit" timeStamp="3:25 PM"/>
            <EmailRow sender="JohnDoe@gmail.com" subject="Lorem ipsum dolor sit" timeStamp="3:25 PM"/> */}
            
            {/* <!-- Week's Emails --> */}
            {/* <div className="row ml-1 list_header mb-2">
                <div className="font-weight-bold">Last Week</div>
            </div> */}

            {/* <EmailRow sender="JohnDoe@gmail.com" subject="Lorem ipsum dolor sit" timeStamp="3:25 PM"/> */}
            {/* <EmailRow sender="JohnDoe@gmail.com" subject="Hello World" timeStamp="3:25 PM"/> */}
        </div>
        );
    }
}

class EmailRow extends Component {
    render() {
        let sender = this.props.sender;
        let subject = this.props.subject;
        let timeStamp = this.props.timeStamp;

        // console.log(sender);
        // console.log(timeStamp);

        return(
            <div className="row email border border-dark pt-1 pb-1 mb-3">
                <div className="col-4">
                    <div className="sender_column">{sender}</div>
                </div>
                <div className="col-5">
                    <div className="subject_column">
                        <div>
                            {subject}
                        </div> 
                    </div>
                </div>
                <div className="col-2">
                    <div className="date_column"> {timeStamp} </div>
                </div>
                <div className="col-1">
                    <div className="flag_column"><i className="far fa-flag"></i></div>
                </div>
            </div>  
        );
    } 
}