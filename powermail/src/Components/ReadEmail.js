import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class EmailPage extends Component {
    render() {
        return (
        <div class="container">
            <div class="d-inline-block" id="inbox-header">
                <div class="logo mt-2">power<i><b>mail</b></i></div>   

                <div class="row mt-4 mx-2" id="nav-buttons">
                    <div class="col-3 col-lg-2 justify-self-start">
                        <NavLink to='/' >
                            <button type="button" class="nav-btn" id=""><i class="fas fa-folder"></i></button>
                        </NavLink>
                    </div>
                    <div class="col-6 col-lg-6">
                        <button type="button" class="nav-btn mr-3" id=""><i class="fas fa-sync-alt"></i></button>
                        <button type="button" class="nav-btn mr-3" id=""><i class="far fa-envelope"></i></button>
                        <button type="button" class="nav-btn mr-3" id=""><i class="fas fa-undo-alt"></i></button>
                        <button type="button" class="nav-btn mr-3" id=""><i class="fas fa-share"></i></button>
                        <button type="button" class="nav-btn mr-3" id=""><i class="fas fa-flag"></i></button>
                        <button type="button" class="nav-btn mr-3" id=""><i class="fas fa-heart"></i></button>
                        <button type="button" class="nav-btn mr-3" id=""><i class="fas fa-times"></i></button>
                    </div>
                    <div class="col-2 col-lg-3">
                        <button type="button" class="nav-btn mr-3" id=""><i class="fas fa-power-off"></i></button>
                        <button type="button" class="nav-btn mr-3" id=""><i class="fas fa-cog"></i></button>
                    </div>
                    <div class="col-1 justify-self-end">
                        <button type="button" class="nav-btn" id=""><i class="fas fa-question-circle"></i></button>
                    </div>
                </div>
            </div>
            <div class="row mx-0" id="inbox-body">
                <div class="col-2 pt-2" id="inbox-directory">
                    <div class="col">
                        <div class="row">Inbox</div>
                        <div class="row">Trash</div>
                        <div class="row">Junk</div>
                    </div>
                </div>
                {/* <!-- Email Message List --> */}
                <div class="col pt-2 px-4 d-inline-block" id="message-view">
                    {/* <!-- Column Header --> */}
                    <div class="row" id="message-from">From: John Doe</div>
                    <div class="row" id="message-to">To: John Doe</div>
                    <div class="row" id="message-subject">Subject: Hello World </div>
                    <p></p>
                    <div class="row" id="message-body">
                        Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.[1] CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.[2]

        CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts.[3] This separation can improve content accessibility, provide more flexibility and control in the specification of presentation characteristics, enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file, and reduce complexity and repetition in the structural content.

        Separation of formatting and content also makes it feasible to present the same markup page in different styles for different rendering methods, such as on-screen, in print, by voice (via speech-based browser or screen reader), and on Braille-based tactile devices. CSS also has rules for alternate formatting if the content is accessed on a mobile device.[4]

        The name cascading comes from the specified priority scheme to determine which style rule applies if more than one rule matches a particular element. This cascading priority scheme is predictable.

        {/* The CSS specifications are maintained by the World Wide Web Consortium (W3C). Internet media type (MIME type) text/css is registered for use with CSS by RFC 2318 (March 1998). The W3C operates a free CSS validation service for CSS documents.[5]

        In addition to HTML, other markup languages support the use of CSS including XHTML, plain XML, SVG, and XUL.
        In CSS, selectors declare which part of the markup a style applies to by matching tags and attributes in the markup itself.

        Selectors may apply to the following:

        all elements of a specific type, e.g. the second-level headers h2
        elements specified by attribute, in particular:
        id: an identifier unique within the document
        class: an identifier that can annotate multiple elements in a document
        elements depending on how they are placed relative to others in the document tree.
        Classes and IDs are case-sensitive, start with letters, and can include alphanumeric characters, hyphens and underscores. A class may apply to any number of instances of any elements. An ID may only be applied to a single element.

        Pseudo-classes are used in CSS selectors to permit formatting based on information that is not contained in the document tree. One example of a widely used pseudo-class is :hover, which identifies content only when the user “points to” the visible element, usually by holding the mouse cursor over it. It is appended to a selector as in a:hover or #elementid:hover. A pseudo-class classifies document elements, such as :link or :visited, whereas a pseudo-element makes a selection that may consist of partial elements, such as ::first-line or ::first-letter.[6]

        Selectors may be combined in many ways to achieve great specificity and flexibility.[7] Multiple selectors may be joined in a spaced list to specify elements by location, element type, id, class, or any combination thereof. The order of the selectors is important. For example, div .myClass color: red; applies to all elements of class myClass that are inside div elements, whereas .myClass div '{'color: red;'}' applies to all div elements that are in elements of class myClass.

        The following table provides a summary of selector syntax indicating usage and the version of CSS that introduced it.[8] */}

                    </div>

                </div>
            </div>
        </div>
        );  
    }
}