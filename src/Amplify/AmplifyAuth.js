import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function AmplifyAuth() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We now have Auth!</h1>
        <h1>And it looks great!</h1>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(AmplifyAuth);