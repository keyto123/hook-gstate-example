import React from 'react';
import './App.css';
import Login from './screens/login';
import useLogin from './screens/login/store';
import Inputs from './screens/inputs';

function App() {
    const [{ logged }] = useLogin({ logged: 'logged' });
    return (
        <div className="App">
            {
                logged ?
                    <Inputs />
                :
                    <Login />
            }
        </div>
    );
}

export default App;
