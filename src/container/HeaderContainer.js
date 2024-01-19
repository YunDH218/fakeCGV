import styled from 'styled-components';
import ServiceMenu from '../component/ServiceMenu';
import Submenu from '../component/Submenu';
import Wrapper from '../component/Wrapper';
import Images from '../resource/image/Images.png';

export default function HeaderContainer () {
	return (
		<HeaderContainerBox>
			<TopWrapper>
				<a href='/'><Logo /></a>
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

const Logo = styled.div`
	width: 101px;
	height: 50px;
	background: url(${Images}) 0 0;
`;