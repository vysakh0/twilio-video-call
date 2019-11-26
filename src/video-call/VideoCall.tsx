import React, { useState } from 'react';
import Room from './Room';
import JoinRoomForm from './JoinRoomForm';


const VideoCall: React.FC = () => {

  const [hasJoinedRoom, joinRoom] = useState(false)

  const component = hasJoinedRoom ? <Room /> : <JoinRoomForm join={joinRoom} />

  return component;
}

export default VideoCall;
