import styled from 'styled-components';
import Wrapper from '../component/Wrapper.js';
import PopcornImg from '../resource/image/popcorn.jpg'

export default function MainADContainer () {
	return (
		<MainADContainerBox>
			<Wrapper className='wrapper'>
				<img src={PopcornImg} alt='popcorn'/>
				<p>
					Free POPCORN<br />
					for 3 times in a Year<br />
					Only to <p style={{"color": "#f3b", "display": "inline"}}>LG U+</p> Members
				</p>
			</Wrapper>
		</MainADContainerBox>
	);
}

const MainADContainerBox = styled.div`
	color: #fff;
	font-family: 'Black Han Sans', sans-serif;
	background-color: #000;
	
	.wrapper {
		width: 740px;
		display: flex;
		align-items: center;
		margin: 0 auto;
	}
	
	img {
		width: 450px;
		height: 300px;
	}
	
`;