import styled from 'styled-components';
import {useState} from 'react';
import ID_before from '../resource/image/ID_before.png';
import PW_before from '../resource/image/PW_before.png';
import axiosInstance from '../util/axiosInstance';
import { useCookies } from 'react-cookie';
import url from '../resource/string/url.json';

// reference : https://velog.io/@defaultkyle/react-cookie

export default function SignInContainer () {
	
	const [info, setInfo] = useState({
		color: "#666",
		text: "Please enter your ID password and click the 'SIGN IN' button."
	});
	const [ID, setID] = useState("");
	const [PW, setPW] = useState("");
	
	const [, setCookie] = useCookies(['accessToken', 'refreshToken']);
	
	const handleIDChange = e => { setID(e.target.value); }
	const handlePWChange = e => { setPW(e.target.value); }
	
	const handleButtonClick = e => {
		if (PW.length === 0) {
			setInfo({
			color: "#f00",
			text: "Please enter your password first."
			});
			return;
		};
		if (ID.length === 0) {
			setInfo({
				color: "#f00",
				text: "Please enter your ID first."
			});
			return;
		}
		axiosInstance({
			url: url.signin,
			method: 'post',
			data: {
				"username": ID,
				"password": PW
			}
		})
		.then(async res => {
			setCookie('accessToken', res.data.accessToken, {path: '/'});
			setCookie('refreshToken', res.data.refreshToken, {path: '/'});
			window.location.replace(url.main);
		})
		.catch(error => {
			console.log(error)
			setInfo({
				color: "#f00",
				text: error?.response?.data
			});
		})
	}
	
	return (
		<SignInContainerBox>
			<p className="info" style={{color: info.color}}>{info.text}</p>
			<input className="id-input" type="text" onChange={handleIDChange} />
			<input className="pw-input" type="password" onChange={handlePWChange} onKeyPress={(e) => { if (e.key==="Enter") handleButtonClick(e) }} />
			<div className="submit-button" onClick={handleButtonClick}></div>
			<p><input id="StaySignedIn" type="checkbox" /><label htmlFor="StaySignedIn">Stay Signed in</label></p>
			<p>Forgot your <a href="/">password</a> or <a href="/">username</a>?</p>
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
	
	input[type="text"], input[type="password"] {
		color: #666;
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
	
	.submit-button {
		width: 135px;
		height: 35px;
		background: #f00;
		cursor: pointer;
		
		&:before {
			content: 'SIGN IN';
			position: relative;
			top: 1px;
			left: 1px;
			display: block;
			color: #fff;
			text-align: center;
			line-height: 31px;
			width: 131px;
			height: 31px;
			background: #f00;
			border: solid 1px #fff;
		}
	}
	
	label[for="StaySignedIn"] {
		position: relative;
		top: -2px;
	}
	
	p a {
		color: #666;
	}
`;