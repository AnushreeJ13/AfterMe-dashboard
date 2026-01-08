import React, { useState, useRef, useEffect } from 'react';

const Login = ({ onLogin }) => {
	const [showIframe, setShowIframe] = useState(true);
	const iframeRef = useRef(null);

	// keep hooks at top-level to satisfy rules-of-hooks
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);

	useEffect(() => {
		// listen for postMessage from static login page if it posts token/user after login
		const handler = (ev) => {
			if (!ev.data) return;
			if (ev.data.type === 'AFTERME_LOGIN' && ev.data.token) {
				localStorage.setItem('token', ev.data.token);
				if (ev.data.user) onLogin(ev.data.user);
			}
		};
		window.addEventListener('message', handler);
		return () => window.removeEventListener('message', handler);
	}, [onLogin]);

	if (showIframe) {
		return (
			<div style={{height: '100vh'}}>
				<iframe
					ref={iframeRef}
				
					src="/login.html"
					style={{width: '100%', height: '100%', border: 'none'}}
				/>
				
			</div>
		);
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError(null);
		try {
			const res = await fetch('/api/auth/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, password })
			});

			if (!res.ok) {
				const body = await res.json().catch(() => ({}));
				throw new Error(body.message || 'Login failed');
			}

			const data = await res.json();
			if (data.token) localStorage.setItem('token', data.token);
			if (data.user) onLogin(data.user);
		} catch (err) {
			setError(err.message || 'Login error');
		}
	};

	return (
		<div style={{minHeight: '100vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
			<div style={{width:360, padding:20, background:'#fff', borderRadius:8, boxShadow:'0 6px 20px rgba(0,0,0,0.12)'}}>
				<h3 style={{marginTop:0}}>Sign in</h3>
				<form onSubmit={handleSubmit}>
					<label>Email</label>
					<input value={email} onChange={e=>setEmail(e.target.value)} style={{width:'100%',padding:8,margin:'8px 0 12px'}} />
					<label>Password</label>
					<input type="password" value={password} onChange={e=>setPassword(e.target.value)} style={{width:'100%',padding:8,margin:'8px 0 12px'}} />
					{error && <div style={{color:'red',marginBottom:8}}>{error}</div>}
					<button type="submit" style={{width:'100%',padding:10}}>Sign in</button>
				</form>
				<div style={{marginTop:12,fontSize:12,color:'#666'}}>Or <button onClick={()=>setShowIframe(true)}>open the original login page</button>.</div>
			</div>
		</div>
	);
};

export default Login;
