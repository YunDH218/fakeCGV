import styled from 'styled-components';

export default function Submenu () {
	return (
		<div>
			<Menu href='/movie'>movie</Menu>
			<Menu href='/'>theater</Menu>
			<Menu href='/' className='highlight'>ticketing</Menu>
			<Menu href='/'>event</Menu>
		</div>
	);
}

const Menu = styled.a`
	color: #000;
	font-size: 16px;
	text-decoration: none;
	text-transform: uppercase;
	margin-right: 60px;
	&.highlight {
		color: #f00;
	}
`;