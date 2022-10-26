import React, { useEffect, useState } from 'react';
import { Link, useNavigate , useLocation} from 'react-router-dom';
import './Login.css';
import logo from '../../../images/logo/Laptop Stock logo.png';
import { BiShow, BiHide } from "react-icons/bi";
import auth from '../../../firebase.init';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLog from '../../Shared/SocialLog/SocialLog';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading/Loading';
import { async } from '@firebase/util';


const Login = () => {
	const navigate = useNavigate();
	const [passShow, setPassShow] = useState(false);
	const [
		signInWithEmailAndPassword,
		loginUser,
		loading,
		emailLoginError,
	  ] = useSignInWithEmailAndPassword(auth);
	const [authUser, authLoading, authError] = useAuthState(auth);
	const [emailReset, setEmailReset] = useState('');
	const [sendPasswordResetEmail, sending, resetPassError] = useSendPasswordResetEmail(auth);
	const location = useLocation();
	const from = location.state?.from.pathname || '/';
	let elementErrors;
	
 
	if(emailLoginError){
		elementErrors = <p className='m-0 text-danger text-center error-message pt-2'>{emailLoginError?.message}</p>;
	}

	if(loading || authLoading){
		return <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center'>
			<Loading></Loading>
		</div>
	}

	if(authUser){
		navigate(from, {replace:true});
	}

	const handleResetPass = event => {
		setEmailReset(event.target.value);
	}
	const handleReset = () =>{
		if(emailReset.length===0){
			toast.warn('Enter your email for password reset');
		} else{
			toast.success('password reset send to your mail');
			sendPasswordResetEmail(emailReset);
			setEmailReset('');
		}
	}
	
	const handleSubmit = async event =>{
		event.preventDefault();
		const email = event.target.email.value;
		const password = event.target.password.value;
		
		await signInWithEmailAndPassword(email, password);
		
	}
	
	return (
		<div className='signup container d-flex justify-content-center align-items-center'>
			<div className='signup-form mx-auto'>
				<img onClick={() => {
					navigate('/')
				}} style={{cursor:'pointer'}} height={60} src={logo} alt="" />
				<h4 className='mb-3'>Log in</h4>
				<form onSubmit={handleSubmit}>
					<input type="email" name='email' onBlur={handleResetPass} placeholder='Email' required/>
					<div className='passhow-container'>
						<input type={passShow?'text':'password'} name='password' placeholder='Password' required></input>
						<span onClick={() =>{
							setPassShow(!passShow);
						}} className='password-show'>{passShow?<BiShow></BiShow>:<BiHide></BiHide>}</span>
					</div>
					{
						elementErrors
					}
					<p className='text-primary m-0 text-center mt-2' style={{cursor:'pointer'}} onClick={handleReset}>Reset your password</p>
					<button className='btn btn-primary w-100 mt-3 fw-bold'>Log in</button>
					<p className='text-center mt-2 mb-4 text-decoration-none'>Don't have an account? <Link to='/signup' className='text-decoration-none fw-bold'>Sign up</Link></p>
				</form>
				<div className='or-container'>
					<div className='or'>or</div>
				</div>
				<SocialLog className="loginWidth"></SocialLog>
			</div>
		</div>
	);
};

export default Login;