import React from 'react';
import { Button } from 'react-bootstrap';
import { signIn } from '../utils/auth';

function Signin() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>oh its you...</h1>
      <p>i guess click the button.</p>
      <Button type="button" size="lg" className="copy-btn" onClick={signIn}>
        ALL THINGS TINY SKYLAR
      </Button>
    </div>
  );
}

export default Signin;
