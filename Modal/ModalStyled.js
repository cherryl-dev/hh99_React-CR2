import styled from "styled-components";

export const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.158);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContent = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 13px;
`;

export const ModalButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 80px;
`;

export const ModalButton = styled.button`
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