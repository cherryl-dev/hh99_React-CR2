import React, { useState } from 'react';
import styled from "styled-components";
import Button from './Button/Button';

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10px;
    margin-bottom: 10px;
    font-family: 'Dovemayo_gothic';
`;

const Input = styled.input`
    width: 220px;
    height: 20px;
    padding: 10px;
    border: 1px solid #F2A7BB;
    border-radius: 7px;
    margin-left: 5px;
    margin-right: 20px;
`;

const InputGroup = () => {
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
        setName('')
        setPrice('')
    };

    return (
        <div>
            <InputContainer>
                이름 <Input type="text" value={name} onChange={inputNameHandle} />
                가격 <Input type="text" value={price} onChange={inputChangeHandle} />
                <Button primary onClick={inputClickHandle}>저장</Button>
            </InputContainer>
        </div>
    );
};

export default InputGroup;
