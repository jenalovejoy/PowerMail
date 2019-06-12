'use strict';

import { google } from 'googleapis';


// Configuration

const googleConfig = {
    clientId: '<GOOGLE_CLIENT_ID>',        // aljgalljga.apps.googleusercontent.com
    clientSecret: '<GOOGLE_CLIENT_SECRET', // lajfljafla
    redirect: 'https://your-website.com/google-auth'
};


function createConnection() {
    return new google.auth.OAuth2 (
        googleConfig.clientId,
        googleConfig.clientSecret,
        googleConfig.redirect   
    );
};


// Get Google Login URL

// Scope tells what infromation we want to req
const defaultScope = [
    'http://www.googleapis.com/auth/plus.me',   
    'http://www.googleapis.com/auth/userinfo.email'   
];

function getConnectionUrl(auth) {
    return auth.generateAuthUrl({
        access_type: 'offline',
        prompt: 'consent',     // access type and approval prompt will force 
        scope: defaultScope    // a new refresh token to be made for each sign in
    });
}

// create google url to be sent to client
function createGoogleUrl() {
    const auth = createConnection();
    const url = getConnectionUrl(auth);
    return url;
}

// Redirect user/client to google url
// generate URL in API, send to front end as href address of button

// <a href="<GENERATED_GOOGLE_URL>Login with Google</a>"


// Save sign-in details
// https://yourwebsite.com/callback?code=a-bunch-of-random-characters
// exctract code param and give to google api library to check who logged in 
/// user is

// get code from param, can use query-string library/package
// use code to grab items specified in scope

function getGooglePlusApi(auth) {
    return google.plus({ version: 'v1', auth})
}

function getGoogleAccount(code) {
    // get auth tokens
    const data = await auth.getToken(code);
    const tokens = data.tokens;
    
    // add tokens to google api to authenticate us
    const auth = createConnection();
    auth.setCredentials(token);

    // connect to google plus - to get user email
    const plus = getGooglePlusApi(auth);
    const me = await plus.people.get({ userId: 'me' });

    // get the google id and email
    const userGoogleId = me.data.id;
    const userGoogleEmail = me.data.emails && me.data.emails.length
                        && me.data.emails[0].value;

    return {
        id: userGoogleId,
        email: userGoogleEmail,
        tokens: tokens // can save this
    };
}