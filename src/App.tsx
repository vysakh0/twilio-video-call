import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './components/Auth';
import VideoCall from './video-call/VideoCall';

const App: React.FC = () => {
  const [authenticated, setAuthentication] = useState(false)

  if (authenticated) return <VideoCall />
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Auth heading="Twilio chat app" authenticate={() => setAuthentication(true)} />
      </header>
    </div>
  );
}

export default App;
