import ButtonContainer from "./ButtonContainer";
import Button from "./Button";
import Icon from './Icon';
import icon1 from '/Users/leem_cherry/Desktop/sparta/React/react3/src/images/icon1.png';
import icon2 from '/Users/leem_cherry/Desktop/sparta/React/react3/src/images/icon2.png';

const ButtonGroup = () => {
    const primaryClickHandle = () => {
        alert('버튼을 만들어보세요.');
    };

    const ClickHandle = () => {
        const clickInput = prompt('어려운가요?')
    };

    return (
        <div>
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
        </div>
    );
};

export default ButtonGroup;