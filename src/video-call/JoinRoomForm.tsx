import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

const Title = styled.h1`
  font-size: 1.5em;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  display: flex;
  align-items: center;
  justify-content: center;
  background: papayawhip;
`;

interface FormProps {
  join: (isHuman: boolean) => void
}

const JoinForm: React.FC<FormProps> = ({ join }) => {

  return (
    <Wrapper>
      <Title>Join a room</Title>
      <Button onClick={() => join(true)}> Join</Button>
    </Wrapper>
  )
}

export default JoinForm;
