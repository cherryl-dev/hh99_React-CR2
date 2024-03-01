import React, { useState } from 'react';
import { ModalBackground,
    ModalContent,
    ModalButtonContainer,
    ModalButton
} from '../Modal/ModalStyled.js';
import Button from '../Button/Button';
import ButtonContainer from '../Button/ButtonContainer';

const ModalGroup = () => {
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

    return (
        <ButtonContainer>
            <Button size="medium" primary onClick={openModal1}>open modal</Button>
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
    );
};

export default ModalGroup;