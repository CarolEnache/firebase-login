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

  login(event){
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    console.log(email, password)
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, password);
    // TODO: write a welcome message for the user
    promise.then(user =>{
      var lout = document.getElementById('logout');
      lout.classList.remove('hide');
    });

    promise.catch(e => {
      var err = e.message;
      console.log(err);
      this.setState({err: err});
   });
  }

  signup(){

    const email = this.refs.email.value;
    const password = this.refs.password.value;
    console.log(email, password);

    const auth =  firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, password);

    promise
      .then(user =>{
        var err = "Welcome" + user.email;
        firebase.database().ref('user/' + user.uid).set({
          email: user.email
        }); 
        console.log(user);
        this.setState({err:err});
      });
      promise 
      .catch(e => {
        var err = e.message;
        console.log(err);
        this.setState(({err:err}));
      });
  }

  logout(){
    firebase.auth().signOut();
    var lout = document.getElementById('logout');

    lout.classList.add('hide');
  }

  google(){
    console.log('i am in google method')
  }

  constructor(props) {
    super(props);
    this.state = {
      err: ''
    };
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.logout = this.logout.bind(this);
    this.google = this.google.bind(this);
  }
  

  render() {
    return (
      <div>
          <input id='email' ref='email' type='email' placeholder='Enter your email'/><br />
          <input id='pass' ref='password' type='password' placeholder='Enter your password'/><br />
          <p>{this.state.err}</p>
          <button onClick={this.login}>Login</button>
          <button onClick={this.signup}>Sign up</button>
          <button onClick={this.logout} id='logout' className='hide'>Log out</button><br />
          <button onClick={this.google} id='google' className='google'>Sign In with Google</button><br />
      </div>
    )
  }
}
export default Authen;