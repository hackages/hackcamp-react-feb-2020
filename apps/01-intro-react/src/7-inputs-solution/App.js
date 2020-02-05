import React, {useState} from 'react';
import {Container} from '@react-hackcamp/components';

export const App = () => {
  const [text, setText] = useState('');
  return (
    <Container>
      <h1>Bind the input area to a state, and display it's value under</h1>
      <input
        type="text"
        value={text}
        onChange={event => {
          setText(event.target.value);
        }}
      />
      {text}
    </Container>
  );
};
