import { useEffect, useState } from "react";

const useToken = (user) =>{
	const [token, setToken] = useState('');
	const [data, setData] = useState({});
	useEffect( () => {
		const getTokens = async() =>{
			console.log('usetoken',user);
			const email = user?.email;
			console.log(email)
			if(email){
				fetch('https://morning-refuge-91739.herokuapp.com/login', {
					method:'POST',
					headers: {
						'content-type': 'application/json'
					},
					body: JSON.stringify({email})
				})
				.then(res => res.json())
				.then(data => setData(data));
				console.log(data);
				setToken(data.accessToken);
				localStorage.setItem('accessToken', data.accessToken);
			}
		}
		getTokens();
	}, [user]);
	return [token];
}
export default useToken;