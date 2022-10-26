import React from 'react';
import './SocialLog.css'
import {FcGoogle} from 'react-icons/fc';
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const SocialLog = () => {
	const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
	if(loading){
		return <div style={{height:'100px'}} className='d-flex justify-content-center align-items-center'>
		<Loading></Loading>
		</div>
	}


	return (
		<div className='social'>
			<div className='social-google' onClick={() => {
				signInWithGoogle();
			}}>
				<FcGoogle></FcGoogle>
				<p className='m-0 fw-bold'>Log in with Google</p>
			</div>
		</div>
	);
};

export default SocialLog;