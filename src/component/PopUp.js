import styled from 'styled-components';
import Images from '../resource/image/Images.png';

const PopUp = props => {
    return (
        <div>
            <Dimmer onClick={ props.handleCloseButton } />
            <PopUpBox>
                <div className='close-button' title="Back" onClick={ props.handleCloseButton }/>
                { props.children }
            </PopUpBox>
        </div>
    );
}

const Dimmer = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
    visibility: visible;
    opacity: 1;
    transition: .5s;
    &.hidden {
        visibility: hidden;
        opacity: 0;
    }
`;
const PopUpBox = styled.div`
    width: 980px;
    height: 75vh;
    position: fixed;
    z-index: 2;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    border-radius: 20px;
    padding: 50px;
    box-sizing: border-box;
    background: #fff;
    
    .close-button {
        width: 30px;
        height: 30px;
        background: url(${Images}) -100px -90px;
        cursor: pointer;
        position: absolute;
    }
`;

export default PopUp;