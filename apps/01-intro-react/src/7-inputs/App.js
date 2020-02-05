import React from 'react';
import {Container} from '@react-hackcamp/components';

export const App = () => {
  return (
    <Container>
      <h1>Bind the input area to a state, and display it's value under</h1>
      <input type="text" value={''} onChange={({target: {value}}) => {}} />
    </Container>
  );
};
