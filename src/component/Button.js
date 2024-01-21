import styled from 'styled-components';

const Button = styled.div`
    width: 120px;
    height: 40px;
    color: #ff4040;
    font-size: 16px;
    text-align: center;
    padding-top: 8px;
    border: solid 2px #ff4040;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    transition: .5s;
    cursor: pointer;
    &:hover {
        background: #ff4040;
        color: #ffffff;
        border: solid 2px rgba(255, 0, 0, 0);
    }
`

export default Button;