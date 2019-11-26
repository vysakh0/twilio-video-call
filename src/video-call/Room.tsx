import React, { useEffect } from 'react';
import Button from '../components/Button';
import axios from 'axios';
import Video from 'twilio-video';

const URL = process.env.REACT_TWILIO_TOKEN_URL;

const VideoCall: React.FC = () => {

  const roomJoined = () => { };
  useEffect(() => {
    axios({
      method: 'post',
      url: URL,
      data: { name: "test" }
    })
      .then(({ data: { token } }) => {
        Video.connect(token, { name: "test" }).then(roomJoined, (error: { message: string }) => {
          alert('Could not connect to Twilio: ' + error.message);
        });
      })
      .catch((err: any) => console.log(err))
  }, [])

  return (
    <div>
      <h3>Twilio Video Call</h3>
      <Button>End call</Button>
    </div>
  )
}

export default VideoCall;
