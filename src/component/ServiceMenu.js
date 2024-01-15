import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import axiosInstance from '../util/axiosInstance';
import { getCookie } from '../util/cookiesUtil';
import sign_in_icon from '../resource/image/sign_in_icon.png';
import sign_out_icon from '../resource/image/sign_out_icon.png';
import sign_up_icon from '../resource/image/sign_up_icon.png';
import my_page_icon from '../resource/image/my_page_icon.png';
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
					<Menu onClick={handleSignOutClick}>
						<img src={sign_out_icon} alt='sign out' />
						SIGN OUT
					</Menu>
				:
					<Menu href='/auth/signin'>
						<img src={sign_in_icon} alt='sign in' />
						SIGN IN
					</Menu>
			}
			<Menu href='/auth/register'>
				<img src={sign_up_icon} alt='sign up' />
				SIGN UP
			</Menu>
			<Menu>
				<img src={my_page_icon} alt='my page' />
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
	img {
		width: 36px;
		height: 36px;
	}
`