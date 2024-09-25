import React from "react";
import Dashboard from "./Dashboard";
import { useState } from "react";

import {useNavigate} from 'react-router-dom'; 

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const [accountType, setAccountType] = useState('');
    const [user, setUser] = useState(null);

    const [loginAttempts, setLoginAttempts] = useState(0); //No of login attempts
    const [errorMessage, setErrorMessage] = useState(''); //String for Error message

    const navigate = useNavigate(); //Hook to navigate between pages

    const handleLogin = () => {

        const validAdminCredentials = {
            username:'user123',
            password:'pass123'
        };

        const isAdmin = accountType === 'admin';

        if (isAdmin 
            && (username === validAdminCredentials.username) 
            && (password === validAdminCredentials.password)) 
        {
            setUser({name: username, isAdmin});
        } else if (!isAdmin 
            && (username === validAdminCredentials.username) 
            && (password === validAdminCredentials.password)) 
        {
            setUser({name: username, isAdmin : false});
        }
        else {
            setLoginAttempts(prevAttempts => prevAttempts + 1);
            setErrorMessage('Invalid credentials');

            if (loginAttempts + 1 >= 3) {
                navigate('/auth-error');
            }
        }

        
    }

    return (
        <>
            <div>
                {user ? (
                    <Dashboard user={user}/>
                ) : (
                    <div>
                        <h1>Login</h1>
                        <div>
                            <label>Username</label>
                            <input text="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>

                        <div>
                            <label>Password</label>
                            <input text="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <div>
                            <label>Account Type</label>
                            <select value={accountType} onChange={(e) => setAccountType(e.target.value)}>
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>

                        <button onClick={handleLogin}>Login</button>
                        <button>Sign Up</button>

                        {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
                        {loginAttempts > 0 && (
                            <p style={{color: 'red'}}>Login Attempts: {loginAttempts}</p>
                        )}
                    </div>
                    )
                }
            </div>
        </>
    )
}

export default LoginForm;