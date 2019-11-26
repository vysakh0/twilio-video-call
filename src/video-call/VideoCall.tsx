import React, { useState } from 'react';
import Button from '../components/Button';

interface VideoCallProps {
  heading?: string
}

const VideoCall: React.FC<VideoCallProps> = ({ heading }) => {
  
  return (
    <div>
     <h3>Hello video call</h3>
    </div>
  );
}

export default VideoCall;
