import styled from 'styled-components';

export default function RegisterContainer () {
	return (
		<RegisterContainerBox>
			<RegisterForm>
				<div className="welcome">welcome</div>
				<p className="label">name</p>
				<input className="register-input" type="text" />
				<p className="label">password</p>
				<input className="register-input" type="password" />
				<p className="label">e-mail</p>
				<input className="register-input" type="text" placeholder="yourname@example.com" />
				<p className="label">phone</p>
				<input className="register-input" type="tel" pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" placeholder="010-0000-0000" />
				<p className="label">birth</p>
				<input className="register-input" type="date" />
				<p className="label">gender</p>
				<div>
					<span className="gender-label" onClick={handleGenderClick}>male</span>
					<span className="gender-label" onClick={handleGenderClick}>female</span>
				</div>
			</RegisterForm>
		</RegisterContainerBox>
	);
}

const RegisterContainerBox = styled.div`
	height: calc(100vh - 163px);
	background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .2));
`;
const RegisterForm = styled.form`
	width: 250px;
	height: 600px;
	color: #fff;
	margin: 40px auto 0;
	background: linear-gradient(160deg, #F8DE77, #F94C10 40%, #C70039 70%, #900C3F 100%);
	box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25);
	box-sizing: border-box;
	overflow: hidden;
	padding: 0 15px;
	
	.welcome {
		text-transform: uppercase;
		font-size: 60px;
		font-family: 'Black Han Sans', sans-serif;
		transform: rotate(-30deg) translate(-70px, 50px);
		margin-bottom: 110px;
	}
	
	.label {
		text-transform: uppercase;
		margin: 5px 0;
		&::after {
			content: ' :';
		}
	}
	
	.register-input {
		width: 220px;
		height: 25px;
		outline: none;
		background: none;
		border: dashed 1px #fff;
		border-radius: 5px;
		padding: 0 10px;
		color: #fff;
		font-size: 16px;
		font-family: 'JejuGothic';
		box-sizing: border-box;
		&::placeholder {
			color: #fff;
  		opacity: .8;
		}
	}
	
	.gender-label {
		cursor: pointer;
		position: relative;
		margin-left: 25px;
		margin-right: 25px;
		vertical-align: top;
		&::before {
			content: ' ';
			border: solid 1px #fff;
			width: 10px;
			height: 10px;
			position: absolute;
			top: 2px;
			left: -25px;
		}
		&.checked::before {
			background: rgba(255, 255, 255, 0.7);
		}
	}
`;

	const handleGenderClick = e => {	// have to fix it!
		const sibling = e.target.nextSibling ?? e.target.previousSibling;
		if (sibling.classList.contain('checked')) {
			sibling.classList.remove('checked');
			e.target.classList.add('checked');
		}
	};