import React, { Component } from 'react'
var firebase = require('firebase');

var config = {
  apiKey: "AIzaSyB1TLUPN-SyZ68KAdYvpMroPuTZLOknTdw",
  authDomain: "fir-login-e866d.firebaseapp.com",
  databaseURL: "https://fir-login-e866d.firebaseio.com",
  projectId: "fir-login-e866d",
  storageBucket: "fir-login-e866d.appspot.com",
  messagingSenderId: "505708195660"
};
firebase.initializeApp(config);

 class Authen extends Component {
  render() {
    return (
      <div>
        <p>This comes from the Firebase-login component</p>
      </div>
    )
  }
}
export default Authen;