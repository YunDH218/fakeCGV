import styled from 'styled-components';
import ServiceMenu from '../component/ServiceMenu';
import Submenu from '../component/Submenu';
import logo from '../resource/image/logo.svg';

export default function HeaderContainer () {
	return (
		<HeaderContainerBox>
			<TopWrapper>
				<a href='/'><Logo src={logo} alt='FAKE CGV' /></a>
				<ServiceMenu />
			</TopWrapper>
			<Divider />
			<BottomWrapper>
				<Submenu />
			</BottomWrapper>
		</HeaderContainerBox>
	);
}

const HeaderContainerBox = styled.div`
	border-bottom: 2px solid #f00;
`;

const Wrapper = styled.div`
	max-width: 1000px;
	min-width: 750px;
	margin: 0 auto;
	padding-left: 150px;
	padding-right: 150px;
`

const TopWrapper = styled(Wrapper)`
	padding-top: 60px;
	padding-bottom: 10px;
	display: flex;
	justify-content: space-between;
	align-content: center;
`;

const BottomWrapper = styled(Wrapper)`
	padding: 10px 150px;
`;

const Divider = styled.div`
	width: 100vw;
	border-bottom: 1px solid #eee;
`

const Logo = styled.img`
	height: 50px;
`;