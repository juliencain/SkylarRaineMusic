import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { signOut } from '../utils/auth';

function Home() {
  useEffect(() => {
    const audio = new Audio('//Users/julien/Library/Group Containers/group.com.apple.notes/Accounts/C72C12C4-6917-4975-84FD-C5BB4AE60319/Media/327BA095-E34E-4296-BF60-4D205DABA4D6/1_41688B03-84E4-4CB6-98F7-EFBE8DC93EE0/Winter Situations_Final Mix.wav');
    audio.play().catch(() => ('Autoplay failed:'));
  }, []);

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    
      <p>yuh</p>
      <h1>sky</h1>
      <Button variant="danger" type="button" size="lrg" className="copy-btn" onClick={signOut}>
        GTFO

    </div>
  );
}

export default Home;
