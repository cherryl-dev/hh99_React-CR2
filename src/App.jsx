import React, { useState } from 'react';
import styled from "styled-components";
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';

const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: 10px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: ${(props) => (props.size === 'large' ? '13px 35px' : props.size === 'medium' ? '14px 35px' : '12px 32px')};
  font-size: 0.9rem;
  font-weight: ${(props) => (props.size === 'large' ? 'bold' : 'none')};
  border-radius: 8px;
  background-color: ${(props) => (props.size === 'large' ? 'white' : props.primary ? '#68f3c7' : '#ffaa90')};
  &:hover {
    background-color: ${(props) => (props.size === 'large' ? '#e4e4e4' : props.primary ? '#7cb7a5' : '#d89080')};
  }
  color: ${(props) => (props.primary ? '#000000' : '#b73226')};
  border: ${(props) => props.size === 'large' && props.primary ? '3px solid #68f3c7' : props.size === 'large' ? '3px solid #ffaa90' : 'none'};
  margin-right: 8px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

const Icon = styled.img`
  width: ${(props) => (props.small ? '12px' : '15px')};
  height: ${(props) => (props.small ? '12px' : '15px')};
  margin-left: 5px;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-left: 10px;
  padding: 30px 4px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 220px;
  height: 20px;
  padding: 10px;
  border: 1px solid #b1b1b1;
  border-radius: 7px;
  margin-left: 5px;
  margin-right: 20px;
`;

const ModalButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 80px;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.158); /* 반투명한 검은 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 13px;
`;

const ModalButton = styled.button`
  background-color: #e6e6e6;
  &:hover {
    background-color: #cacaca;
  }
  width: 40px;
  height: 40px;
  border: 1px solid #e6e6e6;
  border-radius: 30px;
  margin-top: 60px;
  margin-left: 200px;
  cursor: pointer;
  justify-content: flex-end;
`;

const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #b1b1b1;
  border-radius: 11px;
  height: 100px;
  margin-left: 10px;
  margin-right: 10px;
`;

const SelectBoxContainer = styled.div`
  position: relative;
  width: 300px;
  height: 35px;
  border-radius: 11px;
  border: 1px solid #e1e1e1;
  margin-left: 20px;
  cursor: pointer;

  * {
    box-sizing: border-box;
  }
`;

const SelectBoxIcon = styled.img`
  margin-left: auto;
  margin-right: 10px;
  width: 15px;
  height: 15px;
`;

const Label = styled.button`
  display: flex;
  align-items: center;
  width: inherit;
  height: inherit;
  border: 0 none;
  outline: 0 none;
  padding-left: 15px;
  background: transparent;
  cursor: pointer;
`;

const OptionList = styled.ul`
  position: absolute; 
  top: 28px;
  left: 0;
  width: 100%;
  background: #ffffff;
  border: ${({ active }) => (active ? '1px solid #e1e1e1;' : 'none')};
  color: #000000;
  list-style-type: none;
  padding: 0;
  border-radius: 6px;
  overflow: hidden;
  max-height: ${({ active }) => (active ? '500px' : '0')};
`;

const OptionItem = styled.li`
  font-size: 10pt;
  border-bottom: 1px dashed rgb(213, 213, 213);
  padding: 5px 15px 5px;
  transition: .1s;

  &:hover {
    background: rgb(232, 232, 232);
  }

  &:last-child {
    border-bottom: 0 none;
  }
`;

const App = () => {
  // button
  const primaryClickHandle = () => {
    alert('버튼을 만들어보세요.');
  };

  const ClickHandle = () => {
    const clickInput = prompt('어려운가요?')
  };

  // input
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const inputNameHandle = (event) => {
    setName(event.target.value);
  };

  const inputChangeHandle = (event) => {
    const priceNum = event.target.value;
    const formattedPrice = priceNum.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    setPrice(formattedPrice);
  };

  const inputClickHandle = () => {
    alert(`이름: ${name}\n가격: ${price}`);
  };

  // modal
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);

  const openModal1 = () => {
    setModal1(true);
  };

  const closeModal1 = () => {
    setModal1(false);
  };

  const openModal2 = () => {
    setModal2(true);
  };

  const closeModal2 = () => {
    setModal2(false);
  };

  // select
  const [isActive, setIsActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState('리액트');

  const handleSelect = (item) => {
    setIsActive(false);
    setSelectedOption(item);
  };

  return (
    <div className="App">
      <Title>Button</Title>
      <div>
        <ButtonContainer>
          <Button size="large" primary onClick={primaryClickHandle}>
            Large Primary Button <Icon small src={icon2} />
          </Button>
          <Button size="medium" primary>Medium</Button>
          <Button primary>Small</Button>
        </ButtonContainer>
      </div>
      <div>
        <ButtonContainer>
          <Button size="large" onClick={ClickHandle}>
            Large Negative Button <Icon src={icon1} />
          </Button>
          <Button size="medium">Medium</Button>
          <Button>Small</Button>
        </ButtonContainer>
      </div>

      <Title>Input</Title>
      <div>
        <InputContainer>
          이름 <Input type="text" value={name} onChange={inputNameHandle} />
          가격 <Input type="text" value={price} onChange={inputChangeHandle} />
          <Button primary onClick={inputClickHandle}>저장</Button>
        </InputContainer>
      </div>

      <Title>Modal</Title>
      <ButtonContainer>
        <Button primary onClick={openModal1}>open modal</Button>
        {modal1 && (
          <ModalBackground>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              닫기와 확인 버튼이 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.
              <ModalButtonContainer>
                <Button onClick={closeModal1}>닫기</Button>
                <Button primary onClick={closeModal1}>확인</Button>
              </ModalButtonContainer>
            </ModalContent>
          </ModalBackground>
        )}
        <Button size="large" onClick={openModal2}>open modal</Button>
        {modal2 && (
          <ModalBackground onClick={closeModal2}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              닫기 버튼 1개가 있고, <br />
              외부 영역을 누르면 모달이 닫혀요. <br />
              <ModalButton onClick={closeModal2}>X</ModalButton>
            </ModalContent>
          </ModalBackground>
        )}
      </ButtonContainer>

      <Title>Select</Title>
      <SelectContainer>
        <SelectBoxContainer>
          <Label onClick={() => setIsActive(!isActive)}>{selectedOption} <SelectBoxIcon src={icon3} /></Label>
          <OptionList active={isActive}>
            <OptionItem onClick={() => handleSelect('리액트')}>리액트</OptionItem>
            <OptionItem onClick={() => handleSelect('자바')}>자바</OptionItem>
            <OptionItem onClick={() => handleSelect('스프링')}>스프링</OptionItem>
            <OptionItem onClick={() => handleSelect('리액트네이티브')}>리액트네이티브</OptionItem>
          </OptionList>
        </SelectBoxContainer>
      </SelectContainer>

    </div>
  );
}

export default App;
