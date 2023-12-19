import styled from 'styled-components';
import {useState} from 'react';
import ID_before from '../resource/image/ID_before.png';
import PW_before from '../resource/image/PW_before.png';

export default function SignInContainer () {
	
	const [info, setInfo] = useState("Please enter your ID password and click the 'SIGN IN' button.");
	
	return (
		<SignInContainerBox>
			<p className="info">{info}</p>
			<input className="id-input" type="text" />
			<input className="pw-input" type="text" />
		</SignInContainerBox>
	);
}

const SignInContainerBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 100px;
	color: #666;
	font-size: 13px;
	
	.info {
		margin-bottom: 15px;
	}
	
	input[type="text"] {
		width: 135px;
		height: 35px;
		padding-left: 40px;
		border: solid 2px #666;
		margin-bottom: 5px;
		outline: none;
	}
	
	.id-input {
		background: url(${ID_before}) 10px 10px no-repeat;
	}
	
	.pw-input {
		background: url(${PW_before}) 10px 10px no-repeat;
	}
`;