import styled from 'styled-components';
import { useState } from 'react';
import submitImg from '../resource/image/submit-button.png';
import calendarImg from '../resource/image/calendar_icon.png';

export default function RegisterContainer () {
	
	const [user, setUser] = useState("");
	const [pass, setPass] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [birth, setBirth] = useState("");
	const [gender, setGender] = useState();
	const [message, setMessage] = useState("");

	const handleGenderFocus = e => {
		e.target.innerText === "male" && setGender(true);
		e.target.innerText === "female" && setGender(false);
		const sibling = e.target.nextSibling ?? e.target.previousSibling;
		if (sibling.classList.contains('checked')) {
			sibling.classList.remove('checked');
			e.target.classList.add('checked');
			return;
		}
		e.target.classList.add('checked');
	};
	
	const handleButtonClick = e => {
		console.log(user);
		console.log(pass);
		console.log(email);
		console.log(phone);
		console.log(birth);
		console.log(gender);
		
		/* username validation */
		if (user.length < 5) {
			setMessage("name must be longer than 5 characters.");
			return;
		}
		if (user.length > 15) {
			setMessage("name must be shorter than 15 characters.");
			return;
		}
		if (!/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+/.test(user)) {
			setMessage("name must contain at least one letter and number.")
			return;
		}
		// TODO : duptest
		
		/* password validation */
		if (pass.length < 8) {
			setMessage("password must be longer than 8 characters.");
			return;
		}
		if (pass.length > 20) {
			setMessage("password must be shorter than 20 characters.");
			return;
		}
		if (!/(?=.*[!@#$%^&*()_+{}:;<>,.?~\\-])(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+{}:;<>,.?~\\-]+/.test(pass)) {
			setMessage("password must contain at least one special character, letter, and number.")
			return;
		}
		
		/* email validation */
		if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
			setMessage("Not a valid format email address.");
			return;
		}
	}
	
	return (
		<RegisterContainerBox>
			<RegisterForm>
				<div className="welcome">welcome</div>
				<p className="label">name</p>
				<input className="register-input" type="text" placeholder="5~15 characters" onChange={e=>setUser(e.target.value)} />
				<p className="label">password</p>
				<input className="register-input" type="password" placeholder="8~20 characters" onChange={e=>setPass(e.target.value)} />
				<p className="label">e-mail</p>
				<input className="register-input" type="text" placeholder="yourname@example.com" onChange={e=>setEmail(e.target.value)} />
				<p className="label">phone</p>
				<input className="register-input" type="tel" pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" placeholder="010-0000-0000" onChange={e=>setPhone(e.target.value)} />
				<p className="label">birth</p>
				<input className="register-input" type="date" onChange={e=>setBirth(e.target.value)} />
				<p className="label">gender</p>
				<div>
					<span className="gender-label" tabIndex="0" onFocus={handleGenderFocus}>male</span>
					<span className="gender-label" tabIndex="0" onFocus={handleGenderFocus}>female</span>
				</div>
				<div className="submit" onClick={handleButtonClick} />
			</RegisterForm>
			<div>{message}</div>
		</RegisterContainerBox>
	);
}

const RegisterContainerBox = styled.div`
	height: calc(100vh - 203px);
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
			font-size: 16px;
			font-family: 'JejuGothic';
			color: #fff;
  		opacity: .8;
		}
		&[type="password"] {
  		font:small-caption;
		}
		&[type="date"]::-webkit-calendar-picker-indicator {
			background: url(${calendarImg}) 0 2px no-repeat;
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
	
	.submit {
		width: 179px;
		height: 47px;
		display: block;
		margin: 60px auto 0;
		border: none;
		color: rgba(0, 0, 0, 0);
		cursor: pointer;
		background: url(${submitImg}) no-repeat;
	}
`;