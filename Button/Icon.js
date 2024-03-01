import styled from "styled-components";

const Icon = styled.img`
    width: ${(props) => (props.small ? '12px' : '15px')};
    height: ${(props) => (props.small ? '12px' : '15px')};
    margin-left: 5px;
`;

export default Icon;