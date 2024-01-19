import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import axiosInstance from '../util/axiosInstance';
import { getCookie } from '../util/cookiesUtil';
import Images from '../resource/image/Images.png';
import url from '../resource/string/url.json';

export default function ServiceMenu () {
	const [,,removeCookie] = useCookies(['accessToken']);
	
	const handleSignOutClick = e => {
		removeCookie('accessToken', {path: '/'});
		window.location.reload();
	}
	
	const [isLoggedin, setIsLoggedin] = useState();
	
	useEffect(() => {
		if (!getCookie('accessToken')) { setIsLoggedin(false); return; }
	    axiosInstance({
	        url: url.verify,
	        method: 'get',
	        headers: {
	            'accessToken': getCookie('accessToken'),
	            'refreshToken': getCookie('refreshToken')
	        }
	    })
	    .then(res => {
	        setIsLoggedin(true);
	    })
	    .catch(error => {
	        setIsLoggedin(false);
	    });
	}, []);
	
	return (
		<ServiceMenuBox>
			{
				isLoggedin ? 
					<Menu onClick={handleSignOutClick} className="signout">
						<div />
						SIGN OUT
					</Menu>
				:
					<Menu href='/auth/signin' className="signin">
						<div />
						SIGN IN
					</Menu>
			}
			<Menu href='/auth/register' className="signup">
				<div />
				SIGN UP
			</Menu>
			<Menu className="mypage">
				<div />
				MY PAGE
			</Menu>
		</ServiceMenuBox>
	);
}

const ServiceMenuBox = styled.div`
	width: 257px;
	display: flex;
	justify-content: space-between;
`

const Menu = styled.a`
	color: #666666;
	text-decoration: none;
	font-size: 12px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	&.signout div {
		background: url(${Images}) -36px -50px;
	}
	&.signin div {
		background: url(${Images}) 0 -50px;
	}
	&.signup div {
		background: url(${Images}) -72px -50px;
	}
	&.mypage div {
		background: url(${Images}) -108px -50px;
	}
	div {
		width: 36px;
		height: 36px;
	}
`