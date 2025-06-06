import { Button } from 'react-bootstrap';
import { signOut } from '../utils/auth';

function Shows() {
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

      <h1>SHOWS</h1>
      <h1>heres some shows coming up.</h1>
      <Button variant="danger" type="button" size="lrg" className="copy-btn" onClick={signOut}>
        GTFO
      </Button>
    </div>
  );
}

export default Shows;
