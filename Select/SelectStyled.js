import styled from "styled-components";

export const SelectContainer = styled.div`
    display: flex;
    align-items: center;
    /* border: 1px solid #F2A7BB; */
    background-color: #F2A7BB;
    border-radius: 11px;
    height: 100px;
    margin-left: 10px;
    margin-right: 10px;
`;

export const SelectBoxContainer = styled.div`
    position: relative;
    width: 300px;
    height: 35px;
    border-radius: 11px;
    background-color: white;
    margin-left: 20px;
    cursor: pointer;
    font-family: 'Dovemayo_gothic';

  * {
    box-sizing: border-box;
    }
`;

export const SelectBoxIcon = styled.img`
    margin-left: auto;
    margin-right: 10px;
    width: 15px;
    height: 15px;
`;

export const Label = styled.button`
    display: flex;
    align-items: center;
    width: inherit;
    height: inherit;
    border: 0 none;
    outline: 0 none;
    padding-left: 15px;
    background: transparent;
    cursor: pointer;
    font-family: 'Dovemayo_gothic';
`;

export const OptionList = styled.ul`
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

export const OptionItem = styled.li`
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