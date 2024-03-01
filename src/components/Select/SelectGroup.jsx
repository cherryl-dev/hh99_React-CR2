import React, { useState } from 'react';
import { SelectBoxContainer,
    SelectContainer,
    SelectBoxIcon,
    Label,
    OptionList,
    OptionItem
} from '../Select/SelectStyled'
import icon3 from '../../images/icon3.png';

const SelectGroup = () => {
    const [isActive, setIsActive] = useState(false);
    const [selectedOption, setSelectedOption] = useState('리액트');

    const handleSelect = (item) => {
        setIsActive(false);
        setSelectedOption(item);
    };

    return (
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
    );
};

export default SelectGroup;