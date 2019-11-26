import React, { useState } from 'react';
import Button from './Button';

interface AuthProps {
  heading?: string,
  authenticate: (isHuman: boolean) => void
}

const Auth: React.FC<AuthProps> = ({ heading, authenticate }) => {
  const [count, setCount] = useState(5)
  const handleClick = () => {
    // count === 1 && authenticate(true)
    if (count === 1) authenticate(true)

    setCount(count - 1)
  }
  return (
    <div className="Auth">
      <h2>{heading}</h2>
      <p>Press the "I'm human" button {count} times</p>

      
      <Button onClick={handleClick} > I'm human </Button>
    </div>
  );
}

export default Auth;
