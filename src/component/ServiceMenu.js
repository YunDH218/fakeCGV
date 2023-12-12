import styled from 'styled-components'
import sign_in_icon from '../resource/image/sign_in_icon.png';
import sign_up_icon from '../resource/image/sign_up_icon.png';
import my_page_icon from '../resource/image/my_page_icon.png';

export default function ServiceMenu () {
	return (
		<ServiceMenuBox>
			<Menu>
				<img src={sign_in_icon} alt='sign in' />
				SIGN IN
			</Menu>
			<Menu>
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

const Menu = styled.div`
	color: #666666;
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