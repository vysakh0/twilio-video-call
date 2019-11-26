import React, { useState } from 'react';

interface AuthProps {
  heading?: string
}

const Auth: React.FC<AuthProps> = ({ heading }) => {
  const [count, setCount] = useState(5)
  return (
    <div className="Auth">
      <h2>{heading}</h2>
      <p>Press the "I'm human" button {count} times</p>
      <button onClick={() => setCount(count - 1)} data-testid="increment"> I'm human </button>
    </div>
  );
}

export default Auth;
