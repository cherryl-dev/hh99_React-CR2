import React from 'react';
import styled from "styled-components";
import ButtonGroup from './components/Button/ButtonGroup';
import InputGroup from './components/InputGroup';
import ModalGroup from './components/Modal/ModalGroup';
import SelectGroup from './components/Select/SelectGroup';

const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-left: 10px;
  padding: 30px 4px;
  font-family: 'Dovemayo_gothic';
`;

const App = () => {
  return (
    <div>
      <Title>Button</Title>
      <ButtonGroup />
      <Title>Input</Title>
      <InputGroup />
      <Title>Modal</Title>
      <ModalGroup />
      <Title>Select</Title>
      <SelectGroup />
    </div>
  );
}

export default App;
