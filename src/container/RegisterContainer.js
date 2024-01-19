import styled from 'styled-components';
import { useState, useRef } from 'react';
import Images from '../resource/image/Images.png';
import axiosInstance from '../util/axiosInstance';
import url from '../resource/string/url.json';

export default function RegisterContainer () {

	const warningRef = useRef(null);
	const formRef = useRef(null);
	const welcomeRef = useRef(null);
	
	const [user, setUser] = useState("");
	const [pass, setPass] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [birth, setBirth] = useState("");
	const [gender, setGender] = useState();
	const [warning, setWarning] = useState("");

	const showWarning = async warningMessage => {
		setWarning(warningMessage);
		warningRef.current.classList.remove("hidden");
		setTimeout(()=>{warningRef.current.classList.add("hidden");}, 3000);
	}

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
		
		/* username validation */
		if (user.length < 5) {
			showWarning("Name must be longer than 5 characters.");
			return;
		}
		if (user.length > 15) {
			showWarning("Name must be shorter than 15 characters.");
			return;
		}
		if (!/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+/.test(user)) {
			showWarning("Name must contain at least one letter and number.")
			return;
		}
		// TODO : duptest
		
		/* password validation */
		if (pass.length < 8) {
			showWarning("Password must be longer than 8 characters.");
			return;
		}
		if (pass.length > 20) {
			showWarning("Password must be shorter than 20 characters.");
			return;
		}
		if (!/(?=.*[!@#$%^&*()_+{}:;<>,.?~\\-])(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+{}:;<>,.?~\\-]+/.test(pass)) {
			showWarning("Password must contain at least one special character, letter, and number.");
			return;
		}
		
		/* email validation */
		if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
			showWarning("Not a valid format email address.");
			return;
		}
		
		/* phone validation */
		if (!/[0-9]{3}-[0-9]{4}-[0-9]{4}/.test(phone)) {
			showWarning("Please fill in the phone number that matches the form (e.g. 010-0000-0000)");
		}
		
		/* gender validation */
		gender ?? showWarning("Please check the box that matches your gender");
		
		/* register request */
		axiosInstance({
			url: url.register,
			method: 'post',
			data: {
				"username": user,
				"password": pass,
				"email": email,
				"phone": phone,
				"birthday": birth,
				"gender": gender
			}
		})
		.then(res => {
			formRef.current.classList.add("success");
			welcomeRef.current.classList.remove("hidden");
			setTimeout(()=>{
				window.location.replace(url.signin);
			}, 3000);
		})
		.catch(error => {
			showWarning(error?.response?.data);
		});
	}
	
	return (
		<RegisterContainerBox>
			<WelcomeBox ref={welcomeRef} className="hidden" />
			<RegisterForm ref={formRef}>
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
				<input className="register-input" type="date" onChange={e=>setBirth(e.target.value)} max={new Date().toISOString().split('T')[0]} min="1900-01-01" />
				<p className="label">gender</p>
				<div>
					<span className="gender-label" tabIndex="0" onFocus={handleGenderFocus}>male</span>
					<span className="gender-label" tabIndex="0" onFocus={handleGenderFocus}>female</span>
				</div>
				<div className="submit" onClick={handleButtonClick} />
			</RegisterForm>
			<div className="warning hidden" ref={warningRef}>{warning}</div>
		</RegisterContainerBox>
	);
}

const RegisterContainerBox = styled.div`
	height: calc(100vh - 203px);
	background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .2));
	
	.warning {
		box-sizing: border-box;
		width: fit-content;
		max-width: 500px;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 40px;
		color: #fff;
		margin: 100px auto 0;
		padding: 10px 10px 10px 35px;
		background: rgba(255, 0, 0, 0.5);
		border-radius: 5px;
		transition: .5s opacity;
		&::before {
			content: "!";
			position: absolute;
			color: #fff;
			text-align: center;
			top: .5em;
			left: 10px;
			width: 15px;
			height: 15px;
			display: block;
			border: solid 2px #fff;
			border-radius: 10px;
		}
		&.hidden {
			opacity: 0;
		}
	}
`;
const RegisterForm = styled.form`
	width: 250px;
	height: 600px;
	position: relative;
	top: 0;
	color: #fff;
	margin: 40px auto 0;
	background: linear-gradient(160deg, #F8DE77, #F94C10 40%, #C70039 70%, #900C3F 100%);
	box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25);
	box-sizing: border-box;
	overflow: hidden;
	padding: 0 15px;
	transition: opacity .5s ease-in, top .75s ease-in;
	
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
			background: url(${Images}) -80px -90px no-repeat;
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
		background: url(${Images}) 0 -300px;
	}
	
	&.success {
		top: 100px;
		opacity: 0;
	}
`;

const WelcomeBox = styled.div`
	position: absolute;
	width: 517px;
	height: 75px;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
	background: url(${Images}) -300px 0;
	transition: 1s 1s;
	&.hidden {
		opacity: 0;
	}
`;