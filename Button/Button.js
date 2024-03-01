import styled from "styled-components";

const Button = styled.button`
    box-sizing: border-box;
    width: ${(props) => (props.size === 'large' ? '230px' : props.size === 'medium' ? '120px' : '90px')};
    height: ${(props) => (props.size === 'large' ? '50px' : props.size === 'medium' ? '45px' : '40px')};
    font-size: 0.9rem;
    font-weight: ${(props) => (props.size === 'large' ? 'bold' : 'none')};
    border-radius: 8px;
    background-color: ${(props) => (props.size === 'large' ? 'white' : props.primary ? '#BF6B82' : '#F2A7BB')};
    color: ${(props) => (props.primary ? '#000000' : '#732F2F')};
    border: ${(props) => props.size === 'large' && props.primary ? '3px solid #BF6B82' : props.size === 'large' ? '3px solid #F2A7BB' : 'none'};
    margin-right: 8px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-family: 'Dovemayo_gothic';

    &:hover {
    background-color: ${(props) => props.size === 'large' && props.primary ? '#BF6B82' : props.size === 'large' ? '#F2A7BB' : 'white'};
    border: ${(props) => props.size !== 'large' && props.primary ? '3px solid #BF6B82' : props.size !== 'large' ? '3px solid #F2A7BB' : 'none'};
    }
`;

export default Button;