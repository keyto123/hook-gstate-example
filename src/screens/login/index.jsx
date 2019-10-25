import React from 'react';
import LoginInput from './components/input';
import useLogin from './store';

const kp = {};
function Login() {
    const [, { updateUsername, updatePassword, login }] = useLogin(kp);

    console.log('render login');

    return (
        <main className='login-main' >
            <LoginInput action={updateUsername} identifier={'username'} placeholder={'username'} />
            <LoginInput action={updatePassword} identifier={'password'} placeholder={'password'} />
            <button onClick={login} >Login</button>
        </main>
    );
}

export default Login;