import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyCnJQ0fAe6j4NikdIRY4hq2XcnFBEuFZ3g",
    authDomain: "powermail-5f7b2.firebaseapp.com",
    databaseURL: "https://powermail-5f7b2.firebaseio.com",
    projectId: "powermail-5f7b2",
    storageBucket: "powermail-5f7b2.appspot.com",
    messagingSenderId: "1065992040938",
    appId: "1:1065992040938:web:5578da64db6d85d3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


